import { API, getCurrentHub } from '@sentry/core'
import { Breadcrumb, BreadcrumbHint, Integration, Severity } from '@sentry/types'
import {
  getEventDescription,
  getGlobalObject,
  isString,
  logger,
  normalize,
  safeJoin,
} from '@sentry/utils'

import { fill, getCurrentPage, getPrevPage } from '../helpers'

const global = getGlobalObject<Window>()

/** JSDoc */
interface BreadcrumbIntegrations {
  console?: boolean,
  request?: boolean,
  navigation?: boolean,
  api?: boolean,
  lifecycle?: boolean,
}

/** Default Breadcrumbs instrumentations */
export class Breadcrumbs implements Integration {
  /**
   * @inheritDoc
   */
  public name: string = Breadcrumbs.id;

  /**
   * @inheritDoc
   */
  public static id: string = 'Breadcrumbs';

  /** JSDoc */
  private readonly _options: BreadcrumbIntegrations;

  /**
   * @inheritDoc
   */
  public constructor(options?: BreadcrumbIntegrations) {
    this._options = {
      console: true,
      request: true,
      navigation: true,
      api: true,
      lifecycle: true,
      ...options,
    }
  }

  /** JSDoc */
  private _instrumentConsole(): void {
    if (!('console' in global)) {
      return
    }

    ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (level: string): void {
      if (!(level in global.console)) {
        return
      }

      fill(global.console, level, function (originalConsoleLevel: () => any): any {
        return function (...args: any[]): any {
          const breadcrumbData = {
            category: 'console',
            data: {
              extra: {
                arguments: normalize(args, 3),
              },
              logger: 'console',
            },
            level: Severity.fromString(level),
            message: safeJoin(args, ' '),
          }

          if (level === 'assert') {
            if (args[0] === false) {
              breadcrumbData.message = `Assertion failed: ${safeJoin(args.slice(1), ' ') || 'console.assert'}`
              breadcrumbData.data.extra.arguments = normalize(args.slice(1), 3)
            }
          }

          Breadcrumbs.addBreadcrumb(breadcrumbData, {
            input: args,
            level,
          })

          // this fails for some browsers. :(
          if (originalConsoleLevel) {
            Function.prototype.apply.call(originalConsoleLevel, global.console, args)
          }
        }
      })
    })
  }

  /** JSDoc */
  private _instrumentRequest(): void {
    if (!wx.request) {
      return
    }

    fill(wx, 'request', originalRequest => {
      const wrappedRequest: (typeof wx)['request'] = requestOptions => {
        let method = requestOptions.method ? requestOptions.method.toUpperCase() : 'GET'
        let url = requestOptions.url

        const client = getCurrentHub().getClient()
        const dsn = client && client.getDsn()
        if (dsn) {
          const filterUrl = new API(dsn).getStoreEndpoint()
          if (filterUrl && url.includes(filterUrl)) {
            if (method === 'POST' && requestOptions.data) {
              addSentryBreadcrumb(requestOptions.data)
            }
            return originalRequest.call(wx, requestOptions)
          }
        }
        const fetchData: Record<string, any> = {
          method,
          url,
        }

        const originSuccess = requestOptions.success
        const originFail = requestOptions.fail

        requestOptions.success = res => {
          if (originSuccess) {
            originSuccess(res)
          }
          fetchData.statusCode = res.statusCode
          Breadcrumbs.addBreadcrumb(
            {
              category: 'request',
              data: fetchData,
              type: 'http',
            },
          )
        }

        requestOptions.fail = error => {
          if (originFail) {
            originFail(error)
          }
          Breadcrumbs.addBreadcrumb(
            {
              category: 'request',
              data: fetchData,
              level: Severity.Error,
              type: 'http',
            },
          )
        }

        return originalRequest.call(wx, requestOptions)
      }
      return wrappedRequest
    })
  }

  /** JSDoc */
  private _instrumentNavigation(): void {
    function handleNavigate(originalNavigate: Function) {
      return (options: { url?: string, delta?: number } = {} as any) => {
        let to = options.url
        if (!to && options.delta) {
          to = getPrevPage(options.delta)
        }
        if (to) {
          const from = getCurrentPage()
          Breadcrumbs.addBreadcrumb({
            category: 'navigation',
            data: { from, to },
          })
        }
        return originalNavigate.call(wx, options)
      }
    }

    ['navigateBack', 'navigateTo', 'redirectTo', 'reLaunch', 'switchTab'].forEach(api => {
      if (!(wx as any)[api]) {
        return
      }

      fill(wx, api, handleNavigate)
    })
  }

  /** JSDoc */
  private _instrumentApi(): void {
    Object.keys(wx)
      .filter(api => {
        return typeof (wx as any)[api] === 'function'
      })
      .forEach(api => {
        fill(wx, api, original => {
          return (...args: any[]) => {
            if (!(args[0] || {}).__sentry_ignore__) {
              Breadcrumbs.addBreadcrumb(
                {
                  category: 'api',
                  data: {
                    name: api,
                    args: args,
                  },
                },
              )
            }
            return original.apply(wx, args)
          }
        })
      })
  }

  /** JSDoc */
  private _instrumentLifecycle(): void {
    (['onAppShow', 'onAppHide'] as Array<keyof typeof wx>).forEach(api => {
      if (!wx[api]) {
        return
      }

      (wx[api] as any)((res: any) => {
        Breadcrumbs.addBreadcrumb({
          category: 'app-life-cycle',
          data: {
            name: api,
            args: res,
          },
        })
      })
    })
  }

  /**
   * Helper that checks if integration is enabled on the client.
   * @param breadcrumb Breadcrumb
   * @param hint BreadcrumbHint
   */
  public static addBreadcrumb(breadcrumb: Breadcrumb, hint?: BreadcrumbHint): void {
    if (getCurrentHub().getIntegration(Breadcrumbs)) {
      getCurrentHub().addBreadcrumb(breadcrumb, hint)
    }
  }

  /**
   * Instrument browser built-ins w/ breadcrumb capturing
   *  - Console API
   *  - DOM API (click/typing)
   *  - XMLHttpRequest API
   *  - Fetch API
   *  - History API
   */
  public setupOnce(): void {
    if (this._options.console) {
      this._instrumentConsole()
    }
    if (this._options.navigation) {
      this._instrumentNavigation()
    }
    if (this._options.request) {
      this._instrumentRequest()
    }
    if (this._options.api) {
      this._instrumentApi()
    }
    if (this._options.lifecycle) {
      this._instrumentLifecycle()
    }
  }
}

/** JSDoc */
function addSentryBreadcrumb(serializedData: any): void {
  // There's always something that can go wrong with deserialization...
  try {
    const event: { [key: string]: any } = isString(serializedData) ? JSON.parse(serializedData) : serializedData
    Breadcrumbs.addBreadcrumb(
      {
        category: 'sentry',
        event_id: event.event_id,
        level: event.level || Severity.fromString('error'),
        message: getEventDescription(event),
      },
      {
        event,
      },
    )
  } catch (_oO) {
    logger.error('Error while adding sentry type breadcrumb')
  }
}
