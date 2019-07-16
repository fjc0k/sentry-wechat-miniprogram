# sentry-wechat-miniprogram

修改自 [@sentry/browser](https://www.npmjs.com/package/@sentry/browser) 5.5.0 版本，使用方法相同。

但因为劫持了小程序原生 `wx` 对象下面的一些方法，所以 **不支持和小程序插件一起使用**。

## 安装

```bash
# yarn
yarn add sentry-wechat-miniprogram

# or, npm
npm install sentry-wechat-miniprogram --save
```

你也可进入这里 [https://unpkg.com/sentry-wechat-miniprogram/lib/](https://unpkg.com/sentry-wechat-miniprogram/lib/) 下载 `index.js` 手动在项目中引入。

## 使用

```js
import * as Sentry from 'sentry-wechat-miniprogram'

// 使用方法同 https://www.npmjs.com/package/@sentry/browser
```

## 许可

Jay Fong © MIT
