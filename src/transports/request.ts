import { Event, Response, Status } from '@sentry/types'

import { BaseTransport } from './base'

/** `wx.request` based transport */
export class RequestTransport extends BaseTransport {
  /**
   * @inheritDoc
   */
  public sendEvent(event: Event): Promise<Response> {
    return this._buffer.add(
      new Promise<Response>((resolve, reject) => {
        wx.request({
          url: this.url,
          method: 'POST',
          data: event,
          success(res) {
            if (res.statusCode === 200) {
              resolve({
                status: Status.fromHttpCode(res.statusCode),
              })
            } else {
              reject(res)
            }
          },
          fail(err) {
            reject(err)
          },
        })
      }),
    )
  }
}
