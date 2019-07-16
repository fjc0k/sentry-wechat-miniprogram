// prettier-ignore
// Prettier disabled due to trailing comma not working in IE10/11
(function (
  _window,
  _document,
  _script,
  _onerror,
  _onunhandledrejection,
  _namespace,
  _publicKey,
  _sdkBundleUrl,
  _config,
) {
  let lazy = true
  let forceLoad = false

  for (let i = 0; i < document.scripts.length; i++) {
    if (document.scripts[i].src.indexOf(_publicKey) > -1) {
      lazy = !(document.scripts[i].getAttribute('data-lazy') === 'no')
      break
    }
  }

  let injected = false
  const onLoadCallbacks = []

  // Create a namespace and attach function that will store captured exception
  // Because functions are also objects, we can attach the queue itself straight to it and save some bytes
  const queue = function (content) {
    // content.e = error
    // content.p = promise rejection
    // content.f = function call the Sentry
    if (
      (content.e
        || content.p
        || (content.f && content.f.indexOf('capture') > -1)
        || (content.f && content.f.indexOf('showReportDialog') > -1))
      && lazy
    ) {
      // We only want to lazy inject/load the sdk bundle if
      // an error or promise rejection occured
      // OR someone called `capture...` on the SDK
      injectSdk(onLoadCallbacks)
    }
    queue.data.push(content)
  }
  queue.data = []

  function injectSdk(callbacks) {
    if (injected) {
      return
    }
    injected = true

    // Create a `script` tag with provided SDK `url` and attach it just before the first, already existing `script` tag
    // Scripts that are dynamically created and added to the document are async by default,
    // they don't block rendering and execute as soon as they download, meaning they could
    // come out in the wrong order. Because of that we don't need async=1 as GA does.
    // it was probably(?) a legacy behavior that they left to not modify few years old snippet
    // https://www.html5rocks.com/en/tutorials/speed/script-loading/
    const _currentScriptTag = _document.getElementsByTagName(_script)[0]
    const _newScriptTag = _document.createElement(_script)
    _newScriptTag.src = _sdkBundleUrl
    _newScriptTag.crossorigin = 'anonymous'

    // Once our SDK is loaded
    _newScriptTag.addEventListener('load', function () {
      try {
        // Restore onerror/onunhandledrejection handlers
        _window[_onerror] = _oldOnerror
        _window[_onunhandledrejection] = _oldOnunhandledrejection

        const SDK = _window[_namespace]

        const oldInit = SDK.init

        // Configure it using provided DSN and config object
        SDK.init = function (options) {
          const target = _config
          for (const key in options) {
            if (Object.prototype.hasOwnProperty.call(options, key)) {
              target[key] = options[key]
            }
          }
          oldInit(target)
        }

        sdkLoaded(callbacks, SDK)
      } catch (o_O) {
        console.error(o_O)
      }
    })

    _currentScriptTag.parentNode.insertBefore(_newScriptTag, _currentScriptTag)
  }

  function sdkLoaded(callbacks, SDK) {
    try {
      const data = queue.data

      // We have to make sure to call all callbacks first
      for (let i = 0; i < callbacks.length; i++) {
        if (typeof callbacks[i] === 'function') {
          callbacks[i]()
        }
      }

      let initAlreadyCalled = false
      const __sentry = _window['__SENTRY__']
      // If there is a global __SENTRY__ that means that in any of the callbacks init() was already invoked
      if (!(typeof __sentry === 'undefined') && __sentry.hub && __sentry.hub.getClient()) {
        initAlreadyCalled = true
      }

      // We want to replay all calls to Sentry and also make sure that `init` is called if it wasn't already
      // We replay all calls to `Sentry.*` now
      let calledSentry = false
      for (let i = 0; i < data.length; i++) {
        if (data[i].f) {
          calledSentry = true
          const call = data[i]
          if (initAlreadyCalled === false && call.f !== 'init') {
            // First call always has to be init, this is a conveniece for the user so call to init is optional
            SDK.init()
          }
          initAlreadyCalled = true
          SDK[call.f].apply(SDK, call.a)
        }
      }
      if (initAlreadyCalled === false && calledSentry === false) {
        // Sentry has never been called but we need Sentry.init() so call it
        SDK.init()
      }

      // Because we installed the SDK, at this point we have an access to TraceKit's handler,
      // which can take care of browser differences (eg. missing exception argument in onerror)
      const tracekitErrorHandler = _window[_onerror]
      const tracekitUnhandledRejectionHandler = _window[_onunhandledrejection]

      // And now capture all previously caught exceptions
      for (let i = 0; i < data.length; i++) {
        if (data[i].e && tracekitErrorHandler) {
          tracekitErrorHandler.apply(_window, data[i].e)
        } else if (data[i].p && tracekitUnhandledRejectionHandler) {
          tracekitUnhandledRejectionHandler.apply(_window, [data[i].p])
        }
      }
    } catch (o_O) {
      console.error(o_O)
    }
  }

  // We make sure we do not overwrite window.Sentry since there could be already integrations in there
  _window[_namespace] = _window[_namespace] || {}

  _window[_namespace].onLoad = function (callback) {
    onLoadCallbacks.push(callback)
    if (lazy && !forceLoad) {
      return
    }
    injectSdk(onLoadCallbacks)
  }

  _window[_namespace].forceLoad = function () {
    forceLoad = true
    if (lazy) {
      setTimeout(function () {
        injectSdk(onLoadCallbacks)
      })
    }
  }
  ;[
    'init',
    'addBreadcrumb',
    'captureMessage',
    'captureException',
    'captureEvent',
    'configureScope',
    'withScope',
    'showReportDialog',
  ].forEach(function (f) {
    _window[_namespace][f] = function () {
      queue({ f: f, a: arguments })
    }
  })

  // Store reference to the old `onerror` handler and override it with our own function
  // that will just push exceptions to the queue and call through old handler if we found one
  const _oldOnerror = _window[_onerror]
  // eslint-disable-next-line no-unused-vars
  _window[_onerror] = function (message, source, lineno, colno, exception) {
    // Use keys as "data type" to save some characters"
    queue({
      e: [].slice.call(arguments),
    })

    if (_oldOnerror) _oldOnerror.apply(_window, arguments)
  }

  // Do the same store/queue/call operations for `onunhandledrejection` event
  const _oldOnunhandledrejection = _window[_onunhandledrejection]
  _window[_onunhandledrejection] = function (exception) {
    queue({
      p: exception.reason,
    })
    if (_oldOnunhandledrejection) _oldOnunhandledrejection.apply(_window, arguments)
  }

  if (!lazy) {
    setTimeout(function () {
      injectSdk(onLoadCallbacks)
    })
  }
})(window, document, 'script', 'onerror', 'onunhandledrejection', 'Sentry', 'loader.js', '../../build/bundle.js', {
  dsn: 'https://public@example.com/1',
})