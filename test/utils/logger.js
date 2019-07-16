/*!
 * sentry-wechat-miniprogram v0.0.0
 * (c) Jay Fong <fjc0kb@gmail.com> (https://github.com/fjc0k)
 * Released under the MIT License.
 */
'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf
        || ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b })
        || function (d, b) { for (let p in b) if (b.hasOwnProperty(p)) d[p] = b[p] }
  return extendStatics(d, b)
}

function __extends(d, b) {
  extendStatics(d, b)
  function __() { this.constructor = d }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __())
}

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i]
      for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
    }
    return t
  }
  return __assign.apply(this, arguments)
}

function __read(o, n) {
  let m = typeof Symbol === 'function' && o[Symbol.iterator]
  if (!m) return o
  let i = m.call(o), r, ar = [], e
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
  }
  catch (error) { e = { error: error } }
  finally {
    try {
      if (r && !r.done && (m = i['return'])) m.call(i)
    }
    finally { if (e) throw e.error }
  }
  return ar
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
  {ar = ar.concat(__read(arguments[i]))}
  return ar
}

/** Console logging verbosity for the SDK. */
let LogLevel
;(function (LogLevel) {
  /** No logs will be generated. */
  LogLevel[LogLevel['None'] = 0] = 'None'
  /** Only SDK internal errors will be logged. */
  LogLevel[LogLevel['Error'] = 1] = 'Error'
  /** Information useful for debugging the SDK will be logged. */
  LogLevel[LogLevel['Debug'] = 2] = 'Debug'
  /** All SDK actions will be logged. */
  LogLevel[LogLevel['Verbose'] = 3] = 'Verbose'
})(LogLevel || (LogLevel = {}));

/** JSDoc */
(function (Severity) {
  /** JSDoc */
  Severity['Fatal'] = 'fatal'
  /** JSDoc */
  Severity['Error'] = 'error'
  /** JSDoc */
  Severity['Warning'] = 'warning'
  /** JSDoc */
  Severity['Log'] = 'log'
  /** JSDoc */
  Severity['Info'] = 'info'
  /** JSDoc */
  Severity['Debug'] = 'debug'
  /** JSDoc */
  Severity['Critical'] = 'critical'
})(exports.Severity || (exports.Severity = {}));
// tslint:disable:completed-docs
// tslint:disable:no-unnecessary-qualifier no-namespace
(function (Severity) {
  /**
     * Converts a string-based level into a {@link Severity}.
     *
     * @param level string representation of Severity
     * @returns Severity
     */
  function fromString(level) {
    switch (level) {
      case 'debug':
        return Severity.Debug
      case 'info':
        return Severity.Info
      case 'warn':
      case 'warning':
        return Severity.Warning
      case 'error':
        return Severity.Error
      case 'fatal':
        return Severity.Fatal
      case 'critical':
        return Severity.Critical
      case 'log':
      default:
        return Severity.Log
    }
  }
  Severity.fromString = fromString
})(exports.Severity || (exports.Severity = {}));

/** The status of an event. */
(function (Status) {
  /** The status could not be determined. */
  Status['Unknown'] = 'unknown'
  /** The event was skipped due to configuration or callbacks. */
  Status['Skipped'] = 'skipped'
  /** The event was sent to Sentry successfully. */
  Status['Success'] = 'success'
  /** The client is currently rate limited and will try again later. */
  Status['RateLimit'] = 'rate_limit'
  /** The event could not be processed. */
  Status['Invalid'] = 'invalid'
  /** A server-side error ocurred during submission. */
  Status['Failed'] = 'failed'
})(exports.Status || (exports.Status = {}));
// tslint:disable:completed-docs
// tslint:disable:no-unnecessary-qualifier no-namespace
(function (Status) {
  /**
     * Converts a HTTP status code into a {@link Status}.
     *
     * @param code The HTTP response status code.
     * @returns The send status or {@link Status.Unknown}.
     */
  function fromHttpCode(code) {
    if (code >= 200 && code < 300) {
      return Status.Success
    }
    if (code === 429) {
      return Status.RateLimit
    }
    if (code >= 400 && code < 500) {
      return Status.Invalid
    }
    if (code >= 500) {
      return Status.Failed
    }
    return Status.Unknown
  }
  Status.fromHttpCode = fromHttpCode
})(exports.Status || (exports.Status = {}))

let setPrototypeOf = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties) // tslint:disable-line:no-unbound-method
/**
 * setPrototypeOf polyfill using __proto__
 */
function setProtoOf(obj, proto) {
  // @ts-ignore
  obj.__proto__ = proto
  return obj
}
/**
 * setPrototypeOf polyfill using mixin
 */
function mixinProperties(obj, proto) {
  for (let prop in proto) {
    if (!obj.hasOwnProperty(prop)) {
      // @ts-ignore
      obj[prop] = proto[prop]
    }
  }
  return obj
}

/** An error emitted by Sentry SDKs and related utilities. */
let SentryError = /** @class */ (function (_super) {
  __extends(SentryError, _super)
  function SentryError(message) {
    let _newTarget = this.constructor
    let _this = _super.call(this, message) || this
    _this.message = message
    // tslint:disable:no-unsafe-any
    _this.name = _newTarget.prototype.constructor.name
    setPrototypeOf(_this, _newTarget.prototype)
    return _this
  }
  return SentryError
}(Error))

/**
 * Checks whether given value's type is one of a few Error or Error-like
 * {@link isError}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isError(wat) {
  switch (Object.prototype.toString.call(wat)) {
    case '[object Error]':
      return true
    case '[object Exception]':
      return true
    case '[object DOMException]':
      return true
    default:
      return wat instanceof Error
  }
}
/**
 * Checks whether given value's type is ErrorEvent
 * {@link isErrorEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isErrorEvent(wat) {
  return Object.prototype.toString.call(wat) === '[object ErrorEvent]'
}
/**
 * Checks whether given value's type is a string
 * {@link isString}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isString(wat) {
  return Object.prototype.toString.call(wat) === '[object String]'
}
/**
 * Checks whether given value's is a primitive (undefined, null, number, boolean, string)
 * {@link isPrimitive}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPrimitive(wat) {
  return wat === null || (typeof wat !== 'object' && typeof wat !== 'function')
}
/**
 * Checks whether given value's type is an object literal
 * {@link isPlainObject}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isPlainObject(wat) {
  return Object.prototype.toString.call(wat) === '[object Object]'
}
/**
 * Checks whether given value's type is an regexp
 * {@link isRegExp}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isRegExp(wat) {
  return Object.prototype.toString.call(wat) === '[object RegExp]'
}
/**
 * Checks whether given value has a then function.
 * @param wat A value to be checked.
 */
function isThenable(wat) {
  // tslint:disable:no-unsafe-any
  return Boolean(wat && wat.then && typeof wat.then === 'function')
  // tslint:enable:no-unsafe-any
}
/**
 * Checks whether given value's type is a SyntheticEvent
 * {@link isSyntheticEvent}.
 *
 * @param wat A value to be checked.
 * @returns A boolean representing the result.
 */
function isSyntheticEvent(wat) {
  // tslint:disable-next-line:no-unsafe-any
  return isPlainObject(wat) && 'nativeEvent' in wat && 'preventDefault' in wat && 'stopPropagation' in wat
}

/**
 * Requires a module which is protected _against bundler minification.
 *
 * @param request The module path to resolve
 */
function dynamicRequire(mod, request) {
  // tslint:disable-next-line: no-unsafe-any
  return mod.require(request)
}
/**
 * Checks whether we're in the Node.js or Browser environment
 *
 * @returns Answer to given question
 */
function isNodeEnv() {
  // tslint:disable:strict-type-predicates
  return Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]'
}
let fallbackGlobalObject = {}
/**
 * Safely get global scope object
 *
 * @returns Global scope object
 */
function getGlobalObject() {
  return (isNodeEnv()
    ? global
    : typeof window !== 'undefined'
      ? window
      : typeof self !== 'undefined'
        ? self
        : fallbackGlobalObject)
}
/**
 * UUID4 generator
 *
 * @returns string Generated UUID4.
 */
function uuid4() {
  let global = getGlobalObject()
  let crypto = global.crypto || global.msCrypto
  if (!(crypto === void 0) && crypto.getRandomValues) {
    // Use window.crypto API if available
    let arr = new Uint16Array(8)
    crypto.getRandomValues(arr)
    // set 4 in byte 7
    // tslint:disable-next-line:no-bitwise
    arr[3] = (arr[3] & 0xfff) | 0x4000
    // set 2 most significant bits of byte 9 to '10'
    // tslint:disable-next-line:no-bitwise
    arr[4] = (arr[4] & 0x3fff) | 0x8000
    let pad = function (num) {
      let v = num.toString(16)
      while (v.length < 4) {
        v = `0${ v}`
      }
      return v
    }
    return (pad(arr[0]) + pad(arr[1]) + pad(arr[2]) + pad(arr[3]) + pad(arr[4]) + pad(arr[5]) + pad(arr[6]) + pad(arr[7]))
  }
  // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line:no-bitwise
    let r = (Math.random() * 16) | 0
    // tslint:disable-next-line:no-bitwise
    let v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
/**
 * Extracts either message or type+value from an event that can be used for user-facing logs
 * @returns event's description
 */
function getEventDescription(event) {
  if (event.message) {
    return event.message
  }
  if (event.exception && event.exception.values && event.exception.values[0]) {
    let exception = event.exception.values[0]
    if (exception.type && exception.value) {
      return `${exception.type }: ${ exception.value}`
    }
    return exception.type || exception.value || event.event_id || '<unknown>'
  }
  return event.event_id || '<unknown>'
}
/** JSDoc */
function consoleSandbox(callback) {
  let global = getGlobalObject()
  let levels = ['debug', 'info', 'warn', 'error', 'log', 'assert']
  if (!('console' in global)) {
    return callback()
  }
  let originalConsole = global.console
  let wrappedLevels = {}
  // Restore all wrapped console methods
  levels.forEach(function (level) {
    if (level in global.console && originalConsole[level].__sentry__) {
      wrappedLevels[level] = originalConsole[level].__sentry_wrapped__
      originalConsole[level] = originalConsole[level].__sentry_original__
    }
  })
  // Perform callback manipulations
  let result = callback()
  // Revert restoration to wrapped state
  Object.keys(wrappedLevels).forEach(function (level) {
    originalConsole[level] = wrappedLevels[level]
  })
  return result
}
/**
 * Adds exception values, type and value to an synthetic Exception.
 * @param event The event to modify.
 * @param value Value of the exception.
 * @param type Type of the exception.
 * @param mechanism Mechanism of the exception.
 * @hidden
 */
function addExceptionTypeValue(event, value, type, mechanism) {
  if (mechanism === void 0) { mechanism = {
    handled: true,
    type: 'generic',
  } }
  event.exception = event.exception || {}
  event.exception.values = event.exception.values || []
  event.exception.values[0] = event.exception.values[0] || {}
  event.exception.values[0].value = event.exception.values[0].value || value || ''
  event.exception.values[0].type = event.exception.values[0].type || type || 'Error'
  event.exception.values[0].mechanism = event.exception.values[0].mechanism || mechanism
}

// TODO: Implement different loggers for different environments
let global$1 = getGlobalObject()
/** Prefix for logging strings */
let PREFIX = 'Sentry Logger '
/** JSDoc */
let Logger = /** @class */ (function () {
  /** JSDoc */
  function Logger() {
    this._enabled = false
  }
  /** JSDoc */
  Logger.prototype.disable = function () {
    this._enabled = false
  }
  /** JSDoc */
  Logger.prototype.enable = function () {
    this._enabled = true
  }
  /** JSDoc */
  Logger.prototype.log = function () {
    let args = []
    for (let _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    if (!this._enabled) {
      return
    }
    consoleSandbox(function () {
      global$1.console.log(`${PREFIX }[Log]: ${ args.join(' ')}`) // tslint:disable-line:no-console
    })
  }
  /** JSDoc */
  Logger.prototype.warn = function () {
    let args = []
    for (let _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    if (!this._enabled) {
      return
    }
    consoleSandbox(function () {
      global$1.console.warn(`${PREFIX }[Warn]: ${ args.join(' ')}`) // tslint:disable-line:no-console
    })
  }
  /** JSDoc */
  Logger.prototype.error = function () {
    let args = []
    for (let _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    if (!this._enabled) {
      return
    }
    consoleSandbox(function () {
      global$1.console.error(`${PREFIX }[Error]: ${ args.join(' ')}`) // tslint:disable-line:no-console
    })
  }
  return Logger
}())
// Ensure we only have a single logger instance, even if multiple versions of @sentry/utils are being used
global$1.__SENTRY__ = global$1.__SENTRY__ || {}
let logger = global$1.__SENTRY__.logger || (global$1.__SENTRY__.logger = new Logger())

// tslint:disable:no-unsafe-any
/**
 * Memo class used for decycle json objects. Uses WeakSet if available otherwise array.
 */
let Memo = /** @class */ (function () {
  function Memo() {
    // tslint:disable-next-line
    this._hasWeakSet = typeof WeakSet === 'function'
    this._inner = this._hasWeakSet ? new WeakSet() : []
  }
  /**
     * Sets obj to remember.
     * @param obj Object to remember
     */
  Memo.prototype.memoize = function (obj) {
    if (this._hasWeakSet) {
      if (this._inner.has(obj)) {
        return true
      }
      this._inner.add(obj)
      return false
    }
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this._inner.length; i++) {
      let value = this._inner[i]
      if (value === obj) {
        return true
      }
    }
    this._inner.push(obj)
    return false
  }
  /**
     * Removes object from internal storage.
     * @param obj Object to forget
     */
  Memo.prototype.unmemoize = function (obj) {
    if (this._hasWeakSet) {
      this._inner.delete(obj)
    }
    else {
      for (let i = 0; i < this._inner.length; i++) {
        if (this._inner[i] === obj) {
          this._inner.splice(i, 1)
          break
        }
      }
    }
  }
  return Memo
}())

/**
 * Wrap a given object method with a higher-order function
 *
 * @param source An object that contains a method to be wrapped.
 * @param name A name of method to be wrapped.
 * @param replacement A function that should be used to wrap a given method.
 * @returns void
 */
function fill(source, name, replacement) {
  if (!(name in source)) {
    return
  }
  let original = source[name]
  let wrapped = replacement(original)
  // Make sure it's a function first, as we need to attach an empty prototype for `defineProperties` to work
  // otherwise it'll throw "TypeError: Object.defineProperties called on non-object"
  // tslint:disable-next-line:strict-type-predicates
  if (typeof wrapped === 'function') {
    try {
      wrapped.prototype = wrapped.prototype || {}
      Object.defineProperties(wrapped, {
        __sentry__: {
          enumerable: false,
          value: true,
        },
        __sentry_original__: {
          enumerable: false,
          value: original,
        },
        __sentry_wrapped__: {
          enumerable: false,
          value: wrapped,
        },
      })
    }
    catch (_Oo) {
      // This can throw if multiple fill happens on a global object like XMLHttpRequest
      // Fixes https://github.com/getsentry/sentry-javascript/issues/2043
    }
  }
  source[name] = wrapped
}
/**
 * Encodes given object into url-friendly format
 *
 * @param object An object that contains serializable values
 * @returns string Encoded
 */
function urlEncode(object) {
  return Object.keys(object)
    .map(
    // tslint:disable-next-line:no-unsafe-any
      function (key) { return `${encodeURIComponent(key) }=${ encodeURIComponent(object[key])}` },
    )
    .join('&')
}
/**
 * Transforms Error object into an object literal with all it's attributes
 * attached to it.
 *
 * Based on: https://github.com/ftlabs/js-abbreviate/blob/fa709e5f139e7770a71827b1893f22418097fbda/index.js#L95-L106
 *
 * @param error An Error containing all relevant information
 * @returns An object with all error properties
 */
function objectifyError(error) {
  // These properties are implemented as magical getters and don't show up in `for-in` loop
  let err = {
    message: error.message,
    name: error.name,
    stack: error.stack,
  }
  for (let i in error) {
    if (Object.prototype.hasOwnProperty.call(error, i)) {
      err[i] = error[i]
    }
  }
  return err
}
/** Calculates bytes size of input string */
function utf8Length(value) {
  // tslint:disable-next-line:no-bitwise
  return ~-encodeURI(value).split(/%..|./).length
}
/** Calculates bytes size of input object */
function jsonSize(value) {
  return utf8Length(JSON.stringify(value))
}
/** JSDoc */
function normalizeToSize(object,
// Default Node.js REPL depth
  depth,
  // 100kB, as 200kB is max payload size, so half sounds reasonable
  maxSize) {
  if (depth === void 0) { depth = 3 }
  if (maxSize === void 0) { maxSize = 100 * 1024 }
  let serialized = normalize(object, depth)
  if (jsonSize(serialized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize)
  }
  return serialized
}
/** Transforms any input value into a string form, either primitive value or a type of the input */
function serializeValue(value) {
  let type = Object.prototype.toString.call(value)
  // Node.js REPL notation
  if (typeof value === 'string') {
    return value
  }
  if (type === '[object Object]') {
    return '[Object]'
  }
  if (type === '[object Array]') {
    return '[Array]'
  }
  let normalized = normalizeValue(value)
  return isPrimitive(normalized) ? normalized : type
}
/**
 * normalizeValue()
 *
 * Takes unserializable input and make it serializable friendly
 *
 * - translates undefined/NaN values to "[undefined]"/"[NaN]" respectively,
 * - serializes Error objects
 * - filter global objects
 */
function normalizeValue(value, key) {
  if (key === 'domain' && typeof value === 'object' && value._events) {
    return '[Domain]'
  }
  if (key === 'domainEmitter') {
    return '[DomainEmitter]'
  }
  if (typeof global !== 'undefined' && value === global) {
    return '[Global]'
  }
  if (typeof window !== 'undefined' && value === window) {
    return '[Window]'
  }
  if (typeof document !== 'undefined' && value === document) {
    return '[Document]'
  }
  // tslint:disable-next-line:strict-type-predicates
  if (typeof Event !== 'undefined' && value instanceof Event) {
    return Object.getPrototypeOf(value) ? value.constructor.name : 'Event'
  }
  // React's SyntheticEvent thingy
  if (isSyntheticEvent(value)) {
    return '[SyntheticEvent]'
  }
  if (Number.isNaN(value)) {
    return '[NaN]'
  }
  if (value === void 0) {
    return '[undefined]'
  }
  if (typeof value === 'function') {
    return `[Function: ${ value.name || '<unknown-function-name>' }]`
  }
  return value
}
/**
 * Walks an object to perform a normalization on it
 *
 * @param key of object that's walked in current iteration
 * @param value object to be walked
 * @param depth Optional number indicating how deep should walking be performed
 * @param memo Optional Memo class handling decycling
 */
function walk(key, value, depth, memo) {
  if (depth === void 0) { depth = +Infinity }
  if (memo === void 0) { memo = new Memo() }
  // If we reach the maximum depth, serialize whatever has left
  if (depth === 0) {
    return serializeValue(value)
  }
  // If value implements `toJSON` method, call it and return early
  // tslint:disable:no-unsafe-any
  if (value !== null && value !== undefined && typeof value.toJSON === 'function') {
    return value.toJSON()
  }
  // tslint:enable:no-unsafe-any
  // If normalized value is a primitive, there are no branches left to walk, so we can just bail out, as theres no point in going down that branch any further
  let normalized = normalizeValue(value, key)
  if (isPrimitive(normalized)) {
    return normalized
  }
  // Create source that we will use for next itterations, either objectified error object (Error type with extracted keys:value pairs) or the input itself
  let source = (isError(value) ? objectifyError(value) : value)
  // Create an accumulator that will act as a parent for all future itterations of that branch
  let acc = Array.isArray(value) ? [] : {}
  // If we already walked that branch, bail out, as it's circular reference
  if (memo.memoize(value)) {
    return '[Circular ~]'
  }
  // Walk all keys of the source
  for (let innerKey in source) {
    // Avoid iterating over fields in the prototype if they've somehow been exposed to enumeration.
    if (!Object.prototype.hasOwnProperty.call(source, innerKey)) {
      continue
    }
    // Recursively walk through all the child nodes
    acc[innerKey] = walk(innerKey, source[innerKey], depth - 1, memo)
  }
  // Once walked through all the branches, remove the parent from memo storage
  memo.unmemoize(value)
  // Return accumulated values
  return acc
}
/**
 * normalize()
 *
 * - Creates a copy to prevent original input mutation
 * - Skip non-enumerablers
 * - Calls `toJSON` if implemented
 * - Removes circular references
 * - Translates non-serializeable values (undefined/NaN/Functions) to serializable format
 * - Translates known global objects/Classes to a string representations
 * - Takes care of Error objects serialization
 * - Optionally limit depth of final output
 */
function normalize(input, depth) {
  try {
    // tslint:disable-next-line:no-unsafe-any
    return JSON.parse(JSON.stringify(input, function (key, value) { return walk(key, value, depth) }))
  }
  catch (_oO) {
    return '**non-serializable**'
  }
}

// Slightly modified (no IE8 support, ES6) and transcribed to TypeScript

/** A simple queue that holds promises. */
let PromiseBuffer = /** @class */ (function () {
  function PromiseBuffer(_limit) {
    this._limit = _limit
    /** Internal set of queued Promises */
    this._buffer = []
  }
  /**
     * Says if the buffer is ready to take more requests
     */
  PromiseBuffer.prototype.isReady = function () {
    return this._limit === undefined || this.length() < this._limit
  }
  /**
     * Add a promise to the queue.
     *
     * @param task Can be any Promise<T>
     * @returns The original promise.
     */
  PromiseBuffer.prototype.add = function (task) {
    let _this = this
    if (!this.isReady()) {
      return Promise.reject(new SentryError('Not adding Promise due to buffer limit reached.'))
    }
    if (this._buffer.indexOf(task) === -1) {
      this._buffer.push(task)
    }
    task
      .then(function () { return _this.remove(task) })
      .catch(function () {
        return _this.remove(task).catch(function () {
          // We have to add this catch here otherwise we have an unhandledPromiseRejection
          // because it's a new Promise chain.
        })
      })
    return task
  }
  /**
     * Remove a promise to the queue.
     *
     * @param task Can be any Promise<T>
     * @returns Removed promise.
     */
  PromiseBuffer.prototype.remove = function (task) {
    let removedTask = this._buffer.splice(this._buffer.indexOf(task), 1)[0]
    return removedTask
  }
  /**
     * This function returns the number of unresolved promises in the queue.
     */
  PromiseBuffer.prototype.length = function () {
    return this._buffer.length
  }
  /**
     * This will drain the whole queue, returns true if queue is empty or drained.
     * If timeout is provided and the queue takes longer to drain, the promise still resolves but with false.
     *
     * @param timeout Number in ms to wait until it resolves with false.
     */
  PromiseBuffer.prototype.drain = function (timeout) {
    let _this = this
    return new Promise(function (resolve) {
      let capturedSetTimeout = setTimeout(function () {
        if (timeout && timeout > 0) {
          resolve(false)
        }
      }, timeout)
      Promise.all(_this._buffer)
        .then(function () {
          clearTimeout(capturedSetTimeout)
          resolve(true)
        })
        .catch(function () {
          resolve(true)
        })
    })
  }
  return PromiseBuffer
}())

/**
 * Truncates given string to the maximum characters count
 *
 * @param str An object that contains serializable values
 * @param max Maximum number of characters in truncated string
 * @returns string Encoded
 */
function truncate(str, max) {
  if (max === void 0) { max = 0 }
  // tslint:disable-next-line:strict-type-predicates
  if (typeof str !== 'string' || max === 0) {
    return str
  }
  return str.length <= max ? str : `${str.substr(0, max) }...`
}
/**
 * Join values in array
 * @param input array of values to be joined together
 * @param delimiter string to be placed in-between values
 * @returns Joined values
 */
function safeJoin(input, delimiter) {
  if (!Array.isArray(input)) {
    return ''
  }
  let output = []
  // tslint:disable-next-line:prefer-for-of
  for (let i = 0; i < input.length; i++) {
    let value = input[i]
    try {
      output.push(String(value))
    }
    catch (e) {
      output.push('[value cannot be serialized]')
    }
  }
  return output.join(delimiter)
}
/** Merges provided array of keys into */
function keysToEventMessage(keys, maxLength) {
  if (maxLength === void 0) { maxLength = 40 }
  if (!keys.length) {
    return '[object has no keys]'
  }
  if (keys[0].length >= maxLength) {
    return truncate(keys[0], maxLength)
  }
  for (let includedKeys = keys.length; includedKeys > 0; includedKeys--) {
    let serialized = keys.slice(0, includedKeys).join(', ')
    if (serialized.length > maxLength) {
      continue
    }
    if (includedKeys === keys.length) {
      return serialized
    }
    return truncate(serialized, maxLength)
  }
  return ''
}
/**
 * Checks if the value matches a regex or includes the string
 * @param value The string value to be checked against
 * @param pattern Either a regex or a string that must be contained in value
 */
function isMatchingPattern(value, pattern) {
  if (isRegExp(pattern)) {
    return pattern.test(value)
  }
  if (typeof pattern === 'string') {
    return value.includes(pattern)
  }
  return false
}

/** SyncPromise internal states */
let States
;(function (States) {
  /** Pending */
  States['PENDING'] = 'PENDING'
  /** Resolved / OK */
  States['RESOLVED'] = 'RESOLVED'
  /** Rejected / Error */
  States['REJECTED'] = 'REJECTED'
})(States || (States = {}))
/** JSDoc */
let SyncPromise = /** @class */ (function () {
  function SyncPromise(callback) {
    let _this = this
    /** JSDoc */
    this._state = States.PENDING
    /** JSDoc */
    this._handlers = []
    /** JSDoc */
    this._resolve = function (value) {
      _this._setResult(value, States.RESOLVED)
    }
    /** JSDoc */
    this._reject = function (reason) {
      _this._setResult(reason, States.REJECTED)
    }
    /** JSDoc */
    this._setResult = function (value, state) {
      if (_this._state !== States.PENDING) {
        return
      }
      if (isThenable(value)) {
        value.then(_this._resolve, _this._reject)
        return
      }
      _this._value = value
      _this._state = state
      _this._executeHandlers()
    }
    /** JSDoc */
    this._executeHandlers = function () {
      if (_this._state === States.PENDING) {
        return
      }
      if (_this._state === States.REJECTED) {
        // tslint:disable-next-line:no-unsafe-any
        _this._handlers.forEach(function (h) { return h.onFail && h.onFail(_this._value) })
      }
      else {
        // tslint:disable-next-line:no-unsafe-any
        _this._handlers.forEach(function (h) { return h.onSuccess && h.onSuccess(_this._value) })
      }
      _this._handlers = []
      return
    }
    /** JSDoc */
    this._attachHandler = function (handler) {
      _this._handlers = _this._handlers.concat(handler)
      _this._executeHandlers()
    }
    try {
      callback(this._resolve, this._reject)
    }
    catch (e) {
      this._reject(e)
    }
  }
  /** JSDoc */
  SyncPromise.prototype.then = function (onfulfilled, onrejected) {
    let _this = this
    // public then<U>(onSuccess?: HandlerOnSuccess<T, U>, onFail?: HandlerOnFail<U>): SyncPromise<T | U> {
    return new SyncPromise(function (resolve, reject) {
      _this._attachHandler({
        onFail: function (reason) {
          if (!onrejected) {
            reject(reason)
            return
          }
          try {
            resolve(onrejected(reason))
            return
          }
          catch (e) {
            reject(e)
            return
          }
        },
        onSuccess: function (result) {
          if (!onfulfilled) {
            resolve(result)
            return
          }
          try {
            resolve(onfulfilled(result))
            return
          }
          catch (e) {
            reject(e)
            return
          }
        },
      })
    })
  }
  /** JSDoc */
  SyncPromise.prototype.catch = function (onFail) {
    // tslint:disable-next-line:no-unsafe-any
    return this.then(function (val) { return val }, onFail)
  }
  /** JSDoc */
  SyncPromise.prototype.toString = function () {
    return '[object SyncPromise]'
  }
  /** JSDoc */
  SyncPromise.resolve = function (value) {
    return new SyncPromise(function (resolve) {
      resolve(value)
    })
  }
  /** JSDoc */
  SyncPromise.reject = function (reason) {
    return new SyncPromise(function (_, reject) {
      reject(reason)
    })
  }
  return SyncPromise
}())

let TRACEPARENT_REGEXP = /^[ \t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \t]*$/
/**
 * Span containg all data about a span
 */
let Span = /** @class */ (function () {
  function Span(_traceId, _spanId, _sampled, _parent) {
    if (_traceId === void 0) { _traceId = uuid4() }
    if (_spanId === void 0) { _spanId = uuid4().substring(16) }
    this._traceId = _traceId
    this._spanId = _spanId
    this._sampled = _sampled
    this._parent = _parent
  }
  /**
     * Setter for parent
     */
  Span.prototype.setParent = function (parent) {
    this._parent = parent
    return this
  }
  /**
     * Setter for sampled
     */
  Span.prototype.setSampled = function (sampled) {
    this._sampled = sampled
    return this
  }
  /**
     * Continues a trace
     * @param traceparent Traceparent string
     */
  Span.fromTraceparent = function (traceparent) {
    let matches = traceparent.match(TRACEPARENT_REGEXP)
    if (matches) {
      let sampled = void 0
      if (matches[3] === '1') {
        sampled = true
      }
      else if (matches[3] === '0') {
        sampled = false
      }
      let parent_1 = new Span(matches[1], matches[2], sampled)
      return new Span(matches[1], undefined, sampled, parent_1)
    }
    return undefined
  }
  /**
     * @inheritDoc
     */
  Span.prototype.toTraceparent = function () {
    let sampled = ''
    if (this._sampled === true) {
      sampled = '-1'
    }
    else if (this._sampled === false) {
      sampled = '-0'
    }
    return `${this._traceId }-${ this._spanId }${sampled}`
  }
  /**
     * @inheritDoc
     */
  Span.prototype.toJSON = function () {
    return {
      parent: (this._parent && this._parent.toJSON()) || undefined,
      sampled: this._sampled,
      span_id: this._spanId,
      trace_id: this._traceId,
    }
  }
  return Span
}())

/**
 * Holds additional event information. {@link Scope.applyToEvent} will be
 * called by the client before an event will be sent.
 */
let Scope = /** @class */ (function () {
  function Scope() {
    /** Flag if notifiying is happening. */
    this._notifyingListeners = false
    /** Callback for client to receive scope changes. */
    this._scopeListeners = []
    /** Callback list that will be called after {@link applyToEvent}. */
    this._eventProcessors = []
    /** Array of breadcrumbs. */
    this._breadcrumbs = []
    /** User */
    this._user = {}
    /** Tags */
    this._tags = {}
    /** Extra */
    this._extra = {}
    /** Contexts */
    this._context = {}
  }
  /**
     * Add internal on change listener. Used for sub SDKs that need to store the scope.
     * @hidden
     */
  Scope.prototype.addScopeListener = function (callback) {
    this._scopeListeners.push(callback)
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.addEventProcessor = function (callback) {
    this._eventProcessors.push(callback)
    return this
  }
  /**
     * This will be called on every set call.
     */
  Scope.prototype._notifyScopeListeners = function () {
    let _this = this
    if (!this._notifyingListeners) {
      this._notifyingListeners = true
      setTimeout(function () {
        _this._scopeListeners.forEach(function (callback) {
          callback(_this)
        })
        _this._notifyingListeners = false
      })
    }
  }
  /**
     * This will be called after {@link applyToEvent} is finished.
     */
  Scope.prototype._notifyEventProcessors = function (processors, event, hint, index) {
    let _this = this
    if (index === void 0) { index = 0 }
    return new SyncPromise(function (resolve, reject) {
      let processor = processors[index]
      // tslint:disable-next-line:strict-type-predicates
      if (event === null || typeof processor !== 'function') {
        resolve(event)
      }
      else {
        let result = processor(__assign({}, event), hint)
        if (isThenable(result)) {
          result
            .then(function (final) { return _this._notifyEventProcessors(processors, final, hint, index + 1).then(resolve) })
            .catch(reject)
        }
        else {
          _this._notifyEventProcessors(processors, result, hint, index + 1)
            .then(resolve)
            .catch(reject)
        }
      }
    })
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.setUser = function (user) {
    this._user = normalize(user)
    this._notifyScopeListeners()
    return this
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.setTags = function (tags) {
    this._tags = __assign({}, this._tags, normalize(tags))
    this._notifyScopeListeners()
    return this
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.setTag = function (key, value) {
    let _a
    this._tags = __assign({}, this._tags, (_a = {}, _a[key] = normalize(value), _a))
    this._notifyScopeListeners()
    return this
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.setExtras = function (extra) {
    this._extra = __assign({}, this._extra, normalize(extra))
    this._notifyScopeListeners()
    return this
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.setExtra = function (key, extra) {
    let _a
    this._extra = __assign({}, this._extra, (_a = {}, _a[key] = normalize(extra), _a))
    this._notifyScopeListeners()
    return this
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.setFingerprint = function (fingerprint) {
    this._fingerprint = normalize(fingerprint)
    this._notifyScopeListeners()
    return this
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.setLevel = function (level) {
    this._level = normalize(level)
    this._notifyScopeListeners()
    return this
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.setTransaction = function (transaction) {
    this._transaction = transaction
    this._notifyScopeListeners()
    return this
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.setContext = function (name, context) {
    this._context[name] = context ? normalize(context) : undefined
    this._notifyScopeListeners()
    return this
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.setSpan = function (span) {
    this._span = span
    this._notifyScopeListeners()
    return this
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.startSpan = function (parentSpan) {
    let span = new Span()
    span.setParent(parentSpan)
    this.setSpan(span)
    return span
  }
  /**
     * Internal getter for Span, used in Hub.
     * @hidden
     */
  Scope.prototype.getSpan = function () {
    return this._span
  }
  /**
     * Inherit values from the parent scope.
     * @param scope to clone.
     */
  Scope.clone = function (scope) {
    let newScope = new Scope()
    Object.assign(newScope, scope, {
      _scopeListeners: [],
    })
    if (scope) {
      newScope._breadcrumbs = __spread(scope._breadcrumbs)
      newScope._tags = __assign({}, scope._tags)
      newScope._extra = __assign({}, scope._extra)
      newScope._context = __assign({}, scope._context)
      newScope._user = scope._user
      newScope._level = scope._level
      newScope._span = scope._span
      newScope._transaction = scope._transaction
      newScope._fingerprint = scope._fingerprint
      newScope._eventProcessors = __spread(scope._eventProcessors)
    }
    return newScope
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.clear = function () {
    this._breadcrumbs = []
    this._tags = {}
    this._extra = {}
    this._user = {}
    this._context = {}
    this._level = undefined
    this._transaction = undefined
    this._fingerprint = undefined
    this._span = undefined
    this._notifyScopeListeners()
    return this
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.addBreadcrumb = function (breadcrumb, maxBreadcrumbs) {
    let timestamp = new Date().getTime() / 1000
    let mergedBreadcrumb = __assign({ timestamp: timestamp }, breadcrumb)
    this._breadcrumbs
            = maxBreadcrumbs !== undefined && maxBreadcrumbs >= 0
        ? __spread(this._breadcrumbs, [normalize(mergedBreadcrumb)]).slice(-maxBreadcrumbs)
        : __spread(this._breadcrumbs, [normalize(mergedBreadcrumb)])
    this._notifyScopeListeners()
    return this
  }
  /**
     * @inheritDoc
     */
  Scope.prototype.clearBreadcrumbs = function () {
    this._breadcrumbs = []
    this._notifyScopeListeners()
    return this
  }
  /**
     * Applies fingerprint from the scope to the event if there's one,
     * uses message if there's one instead or get rid of empty fingerprint
     */
  Scope.prototype._applyFingerprint = function (event) {
    // Make sure it's an array first and we actually have something in place
    event.fingerprint = event.fingerprint
      ? Array.isArray(event.fingerprint)
        ? event.fingerprint
        : [event.fingerprint]
      : []
    // If we have something on the scope, then merge it with event
    if (this._fingerprint) {
      event.fingerprint = event.fingerprint.concat(this._fingerprint)
    }
    // If we have no data at all, remove empty array default
    if (event.fingerprint && !event.fingerprint.length) {
      delete event.fingerprint
    }
  }
  /**
     * Applies the current context and fingerprint to the event.
     * Note that breadcrumbs will be added by the client.
     * Also if the event has already breadcrumbs on it, we do not merge them.
     * @param event Event
     * @param hint May contain additional informartion about the original exception.
     * @hidden
     */
  Scope.prototype.applyToEvent = function (event, hint) {
    if (this._extra && Object.keys(this._extra).length) {
      event.extra = __assign({}, this._extra, event.extra)
    }
    if (this._tags && Object.keys(this._tags).length) {
      event.tags = __assign({}, this._tags, event.tags)
    }
    if (this._user && Object.keys(this._user).length) {
      event.user = __assign({}, this._user, event.user)
    }
    if (this._context && Object.keys(this._context).length) {
      event.contexts = __assign({}, this._context, event.contexts)
    }
    if (this._level) {
      event.level = this._level
    }
    if (this._transaction) {
      event.transaction = this._transaction
    }
    if (this._span) {
      event.contexts = event.contexts || {}
      event.contexts.trace = this._span
    }
    this._applyFingerprint(event)
    event.breadcrumbs = __spread((event.breadcrumbs || []), this._breadcrumbs)
    event.breadcrumbs = event.breadcrumbs.length > 0 ? event.breadcrumbs : undefined
    return this._notifyEventProcessors(__spread(getGlobalEventProcessors(), this._eventProcessors), event, hint)
  }
  return Scope
}())
/**
 * Retruns the global event processors.
 */
function getGlobalEventProcessors() {
  let global = getGlobalObject()
  global.__SENTRY__ = global.__SENTRY__ || {}
  global.__SENTRY__.globalEventProcessors = global.__SENTRY__.globalEventProcessors || []
  return global.__SENTRY__.globalEventProcessors
}
/**
 * Add a EventProcessor to be kept globally.
 * @param callback EventProcessor to add
 */
function addGlobalEventProcessor(callback) {
  getGlobalEventProcessors().push(callback)
}

/**
 * API compatibility version of this hub.
 *
 * WARNING: This number should only be incresed when the global interface
 * changes a and new methods are introduced.
 *
 * @hidden
 */
let API_VERSION = 3
/**
 * Default maximum number of breadcrumbs added to an event. Can be overwritten
 * with {@link Options.maxBreadcrumbs}.
 */
let DEFAULT_BREADCRUMBS = 30
/**
 * Absolute maximum number of breadcrumbs added to an event. The
 * `maxBreadcrumbs` option cannot be higher than this value.
 */
let MAX_BREADCRUMBS = 100
/**
 * @inheritDoc
 */
let Hub = /** @class */ (function () {
  /**
     * Creates a new instance of the hub, will push one {@link Layer} into the
     * internal stack on creation.
     *
     * @param client bound to the hub.
     * @param scope bound to the hub.
     * @param version number, higher number means higher priority.
     */
  function Hub(client, scope, _version) {
    if (scope === void 0) { scope = new Scope() }
    if (_version === void 0) { _version = API_VERSION }
    this._version = _version
    /** Is a {@link Layer}[] containing the client and scope */
    this._stack = []
    this._stack.push({ client: client, scope: scope })
  }
  /**
     * Internal helper function to call a method on the top client if it exists.
     *
     * @param method The method to call on the client.
     * @param args Arguments to pass to the client function.
     */
  Hub.prototype._invokeClient = function (method) {
    let _a
    let args = []
    for (let _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i]
    }
    let top = this.getStackTop()
    if (top && top.client && top.client[method]) {
      (_a = top.client)[method].apply(_a, __spread(args, [top.scope]))
    }
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.isOlderThan = function (version) {
    return this._version < version
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.bindClient = function (client) {
    let top = this.getStackTop()
    top.client = client
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.pushScope = function () {
    // We want to clone the content of prev scope
    let stack = this.getStack()
    let parentScope = stack.length > 0 ? stack[stack.length - 1].scope : undefined
    let scope = Scope.clone(parentScope)
    this.getStack().push({
      client: this.getClient(),
      scope: scope,
    })
    return scope
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.popScope = function () {
    return this.getStack().pop() !== undefined
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.withScope = function (callback) {
    let scope = this.pushScope()
    try {
      callback(scope)
    }
    finally {
      this.popScope()
    }
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.getClient = function () {
    return this.getStackTop().client
  }
  /** Returns the scope of the top stack. */
  Hub.prototype.getScope = function () {
    return this.getStackTop().scope
  }
  /** Returns the scope stack for domains or the process. */
  Hub.prototype.getStack = function () {
    return this._stack
  }
  /** Returns the topmost scope layer in the order domain > local > process. */
  Hub.prototype.getStackTop = function () {
    return this._stack[this._stack.length - 1]
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.captureException = function (exception, hint) {
    let eventId = (this._lastEventId = uuid4())
    let finalHint = hint
    // If there's no explicit hint provided, mimick the same thing that would happen
    // in the minimal itself to create a consistent behavior.
    // We don't do this in the client, as it's the lowest level API, and doing this,
    // would prevent user from having full control over direct calls.
    if (!hint) {
      let syntheticException = void 0
      try {
        throw new Error('Sentry syntheticException')
      }
      catch (exception) {
        syntheticException = exception
      }
      finalHint = {
        originalException: exception,
        syntheticException: syntheticException,
      }
    }
    this._invokeClient('captureException', exception, __assign({}, finalHint, { event_id: eventId }))
    return eventId
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.captureMessage = function (message, level, hint) {
    let eventId = (this._lastEventId = uuid4())
    let finalHint = hint
    // If there's no explicit hint provided, mimick the same thing that would happen
    // in the minimal itself to create a consistent behavior.
    // We don't do this in the client, as it's the lowest level API, and doing this,
    // would prevent user from having full control over direct calls.
    if (!hint) {
      let syntheticException = void 0
      try {
        throw new Error(message)
      }
      catch (exception) {
        syntheticException = exception
      }
      finalHint = {
        originalException: message,
        syntheticException: syntheticException,
      }
    }
    this._invokeClient('captureMessage', message, level, __assign({}, finalHint, { event_id: eventId }))
    return eventId
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.captureEvent = function (event, hint) {
    let eventId = (this._lastEventId = uuid4())
    this._invokeClient('captureEvent', event, __assign({}, hint, { event_id: eventId }))
    return eventId
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.lastEventId = function () {
    return this._lastEventId
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.addBreadcrumb = function (breadcrumb, hint) {
    let top = this.getStackTop()
    if (!top.scope || !top.client) {
      return
    }
    let _a = (top.client.getOptions && top.client.getOptions()) || {}, _b = _a.beforeBreadcrumb, beforeBreadcrumb = _b === void 0 ? null : _b, _c = _a.maxBreadcrumbs, maxBreadcrumbs = _c === void 0 ? DEFAULT_BREADCRUMBS : _c
    if (maxBreadcrumbs <= 0) {
      return
    }
    let timestamp = new Date().getTime() / 1000
    let mergedBreadcrumb = __assign({ timestamp: timestamp }, breadcrumb)
    let finalBreadcrumb = beforeBreadcrumb
      ? consoleSandbox(function () { return beforeBreadcrumb(mergedBreadcrumb, hint) })
      : mergedBreadcrumb
    if (finalBreadcrumb === null) {
      return
    }
    top.scope.addBreadcrumb(finalBreadcrumb, Math.min(maxBreadcrumbs, MAX_BREADCRUMBS))
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.setUser = function (user) {
    let top = this.getStackTop()
    if (!top.scope) {
      return
    }
    top.scope.setUser(user)
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.setTags = function (tags) {
    let top = this.getStackTop()
    if (!top.scope) {
      return
    }
    top.scope.setTags(tags)
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.setExtras = function (extras) {
    let top = this.getStackTop()
    if (!top.scope) {
      return
    }
    top.scope.setExtras(extras)
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.setTag = function (key, value) {
    let top = this.getStackTop()
    if (!top.scope) {
      return
    }
    top.scope.setTag(key, value)
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.setExtra = function (key, extra) {
    let top = this.getStackTop()
    if (!top.scope) {
      return
    }
    top.scope.setExtra(key, extra)
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.setContext = function (name, context) {
    let top = this.getStackTop()
    if (!top.scope) {
      return
    }
    top.scope.setContext(name, context)
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.configureScope = function (callback) {
    let top = this.getStackTop()
    if (top.scope && top.client) {
      callback(top.scope)
    }
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.run = function (callback) {
    let oldHub = makeMain(this)
    try {
      callback(this)
    }
    finally {
      makeMain(oldHub)
    }
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.getIntegration = function (integration) {
    let client = this.getClient()
    if (!client) {
      return null
    }
    try {
      return client.getIntegration(integration)
    }
    catch (_oO) {
      logger.warn(`Cannot retrieve integration ${ integration.id } from the current Hub`)
      return null
    }
  }
  /**
     * @inheritDoc
     */
  Hub.prototype.traceHeaders = function () {
    let top = this.getStackTop()
    if (top.scope && top.client) {
      let span = top.scope.getSpan()
      if (span) {
        return {
          'sentry-trace': span.toTraceparent(),
        }
      }
    }
    return {}
  }
  return Hub
}())
/** Returns the global shim registry. */
function getMainCarrier() {
  let carrier = getGlobalObject()
  carrier.__SENTRY__ = carrier.__SENTRY__ || {
    hub: undefined,
  }
  return carrier
}
/**
 * Replaces the current main hub with the passed one on the global object
 *
 * @returns The old replaced hub
 */
function makeMain(hub) {
  let registry = getMainCarrier()
  let oldHub = getHubFromCarrier(registry)
  setHubOnCarrier(registry, hub)
  return oldHub
}
/**
 * Returns the default hub instance.
 *
 * If a hub is already registered in the global carrier but this module
 * contains a more recent version, it replaces the registered version.
 * Otherwise, the currently registered hub will be returned.
 */
function getCurrentHub() {
  // Get main carrier (global for every environment)
  let registry = getMainCarrier()
  // If there's no hub, or its an old API, assign a new one
  if (!hasHubOnCarrier(registry) || getHubFromCarrier(registry).isOlderThan(API_VERSION)) {
    setHubOnCarrier(registry, new Hub())
  }
  // Prefer domains over global if they are there
  try {
    // We need to use `dynamicRequire` because `require` on it's own will be optimized by webpack.
    // We do not want this to happen, we need to try to `require` the domain node module and fail if we are in browser
    // for example so we do not have to shim it and use `getCurrentHub` universally.
    let domain = dynamicRequire(module, 'domain')
    let activeDomain = domain.active
    // If there no active domain, just return global hub
    if (!activeDomain) {
      return getHubFromCarrier(registry)
    }
    // If there's no hub on current domain, or its an old API, assign a new one
    if (!hasHubOnCarrier(activeDomain) || getHubFromCarrier(activeDomain).isOlderThan(API_VERSION)) {
      let registryHubTopStack = getHubFromCarrier(registry).getStackTop()
      setHubOnCarrier(activeDomain, new Hub(registryHubTopStack.client, Scope.clone(registryHubTopStack.scope)))
    }
    // Return hub that lives on a domain
    return getHubFromCarrier(activeDomain)
  }
  catch (_Oo) {
    // Return hub that lives on a global object
    return getHubFromCarrier(registry)
  }
}
/**
 * This will tell whether a carrier has a hub on it or not
 * @param carrier object
 */
function hasHubOnCarrier(carrier) {
  if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
    return true
  }
  return false
}
/**
 * This will create a new {@link Hub} and add to the passed object on
 * __SENTRY__.hub.
 * @param carrier object
 * @hidden
 */
function getHubFromCarrier(carrier) {
  if (carrier && carrier.__SENTRY__ && carrier.__SENTRY__.hub) {
    return carrier.__SENTRY__.hub
  }
  carrier.__SENTRY__ = carrier.__SENTRY__ || {}
  carrier.__SENTRY__.hub = new Hub()
  return carrier.__SENTRY__.hub
}
/**
 * This will set passed {@link Hub} on the passed object's __SENTRY__.hub attribute
 * @param carrier object
 * @param hub Hub
 */
function setHubOnCarrier(carrier, hub) {
  if (!carrier) {
    return false
  }
  carrier.__SENTRY__ = carrier.__SENTRY__ || {}
  carrier.__SENTRY__.hub = hub
  return true
}

/**
 * This calls a function on the current hub.
 * @param method function to call on hub.
 * @param args to pass to function.
 */
function callOnHub(method) {
  let args = []
  for (let _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i]
  }
  let hub = getCurrentHub()
  if (hub && hub[method]) {
    // tslint:disable-next-line:no-unsafe-any
    return hub[method].apply(hub, __spread(args))
  }
  throw new Error(`No hub defined or ${ method } was not found on the hub, please open a bug report.`)
}
/**
 * Captures an exception event and sends it to Sentry.
 *
 * @param exception An exception-like object.
 * @returns The generated eventId.
 */
function captureException(exception) {
  let syntheticException
  try {
    throw new Error('Sentry syntheticException')
  }
  catch (exception) {
    syntheticException = exception
  }
  return callOnHub('captureException', exception, {
    originalException: exception,
    syntheticException: syntheticException,
  })
}
/**
 * Captures a message event and sends it to Sentry.
 *
 * @param message The message to send to Sentry.
 * @param level Define the level of the message.
 * @returns The generated eventId.
 */
function captureMessage(message, level) {
  let syntheticException
  try {
    throw new Error(message)
  }
  catch (exception) {
    syntheticException = exception
  }
  return callOnHub('captureMessage', message, level, {
    originalException: message,
    syntheticException: syntheticException,
  })
}
/**
 * Captures a manually created event and sends it to Sentry.
 *
 * @param event The event to send to Sentry.
 * @returns The generated eventId.
 */
function captureEvent(event) {
  return callOnHub('captureEvent', event)
}
/**
 * Callback to set context information onto the scope.
 * @param callback Callback function that receives Scope.
 */
function configureScope(callback) {
  callOnHub('configureScope', callback)
}
/**
 * Records a new breadcrumb which will be attached to future events.
 *
 * Breadcrumbs will be added to subsequent events to provide more context on
 * user's actions prior to an error or crash.
 *
 * @param breadcrumb The breadcrumb to record.
 */
function addBreadcrumb(breadcrumb) {
  callOnHub('addBreadcrumb', breadcrumb)
}
/**
 * Sets context data with the given name.
 * @param name of the context
 * @param context Any kind of data. This data will be normailzed.
 */
function setContext(name, context) {
  callOnHub('setContext', name, context)
}
/**
 * Set an object that will be merged sent as extra data with the event.
 * @param extras Extras object to merge into current context.
 */
function setExtras(extras) {
  callOnHub('setExtras', extras)
}
/**
 * Set an object that will be merged sent as tags data with the event.
 * @param tags Tags context object to merge into current context.
 */
function setTags(tags) {
  callOnHub('setTags', tags)
}
/**
 * Set key:value that will be sent as extra data with the event.
 * @param key String of extra
 * @param extra Any kind of data. This data will be normailzed.
 */
function setExtra(key, extra) {
  callOnHub('setExtra', key, extra)
}
/**
 * Set key:value that will be sent as tags data with the event.
 * @param key String key of tag
 * @param value String value of tag
 */
function setTag(key, value) {
  callOnHub('setTag', key, value)
}
/**
 * Updates user context information for future events.
 *
 * @param user User context object to be set in the current context. Pass `null` to unset the user.
 */
function setUser(user) {
  callOnHub('setUser', user)
}
/**
 * Creates a new scope with and executes the given operation within.
 * The scope is automatically removed once the operation
 * finishes or throws.
 *
 * This is essentially a convenience function for:
 *
 *     pushScope();
 *     callback();
 *     popScope();
 *
 * @param callback that will be enclosed into push/popScope.
 */
function withScope(callback) {
  callOnHub('withScope', callback)
}

/** Regular expression used to parse a Dsn. */
let DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/
/** Error message */
let ERROR_MESSAGE = 'Invalid Dsn'
/** The Sentry Dsn, identifying a Sentry instance and project. */
let Dsn = /** @class */ (function () {
  /** Creates a new Dsn component */
  function Dsn(from) {
    if (typeof from === 'string') {
      this._fromString(from)
    }
    else {
      this._fromComponents(from)
    }
    this._validate()
  }
  /**
     * Renders the string representation of this Dsn.
     *
     * By default, this will render the public representation without the password
     * component. To get the deprecated private _representation, set `withPassword`
     * to true.
     *
     * @param withPassword When set to true, the password will be included.
     */
  Dsn.prototype.toString = function (withPassword) {
    if (withPassword === void 0) { withPassword = false }
    // tslint:disable-next-line:no-this-assignment
    let _a = this, host = _a.host, path = _a.path, pass = _a.pass, port = _a.port, projectId = _a.projectId, protocol = _a.protocol, user = _a.user
    return (`${protocol }://${ user }${withPassword && pass ? `:${ pass}` : ''
    }@${ host }${port ? `:${ port}` : '' }/${ path ? `${path }/` : path }${projectId}`)
  }
  /** Parses a string into this Dsn. */
  Dsn.prototype._fromString = function (str) {
    let match = DSN_REGEX.exec(str)
    if (!match) {
      throw new SentryError(ERROR_MESSAGE)
    }
    let _a = __read(match.slice(1), 6), protocol = _a[0], user = _a[1], _b = _a[2], pass = _b === void 0 ? '' : _b, host = _a[3], _c = _a[4], port = _c === void 0 ? '' : _c, lastPath = _a[5]
    let path = ''
    let projectId = lastPath
    let split = projectId.split('/')
    if (split.length > 1) {
      path = split.slice(0, -1).join('/')
      projectId = split.pop()
    }
    Object.assign(this, { host: host, pass: pass, path: path, projectId: projectId, port: port, protocol: protocol, user: user })
  }
  /** Maps Dsn components into this instance. */
  Dsn.prototype._fromComponents = function (components) {
    this.protocol = components.protocol
    this.user = components.user
    this.pass = components.pass || ''
    this.host = components.host
    this.port = components.port || ''
    this.path = components.path || ''
    this.projectId = components.projectId
  }
  /** Validates this Dsn and throws on error. */
  Dsn.prototype._validate = function () {
    let _this = this
;['protocol', 'user', 'host', 'projectId'].forEach(function (component) {
      if (!_this[component]) {
        throw new SentryError(ERROR_MESSAGE)
      }
    })
    if (this.protocol !== 'http' && this.protocol !== 'https') {
      throw new SentryError(ERROR_MESSAGE)
    }
    if (this.port && Number.isNaN(parseInt(this.port, 10))) {
      throw new SentryError(ERROR_MESSAGE)
    }
  }
  return Dsn
}())

let SENTRY_API_VERSION = '7'
/** Helper class to provide urls to different Sentry endpoints. */
let API = /** @class */ (function () {
  /** Create a new instance of API */
  function API(dsn) {
    this.dsn = dsn
    this._dsnObject = new Dsn(dsn)
  }
  /** Returns the Dsn object. */
  API.prototype.getDsn = function () {
    return this._dsnObject
  }
  /** Returns a string with auth headers in the url to the store endpoint. */
  API.prototype.getStoreEndpoint = function () {
    return `${ this._getBaseUrl() }${this.getStoreEndpointPath()}`
  }
  /** Returns the store endpoint with auth added in url encoded. */
  API.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
    let dsn = this._dsnObject
    let auth = {
      sentry_key: dsn.user,
      sentry_version: SENTRY_API_VERSION,
    }
    // Auth is intentionally sent as part of query string (NOT as custom HTTP header)
    // to avoid preflight CORS requests
    return `${this.getStoreEndpoint() }?${ urlEncode(auth)}`
  }
  /** Returns the base path of the url including the port. */
  API.prototype._getBaseUrl = function () {
    let dsn = this._dsnObject
    let protocol = dsn.protocol ? `${dsn.protocol }:` : ''
    let port = dsn.port ? `:${ dsn.port}` : ''
    return `${protocol }//${ dsn.host }${port}`
  }
  /** Returns only the path component for the store endpoint. */
  API.prototype.getStoreEndpointPath = function () {
    let dsn = this._dsnObject
    return `${dsn.path ? `/${ dsn.path}` : '' }/api/${ dsn.projectId }/store/`
  }
  /** Returns an object that can be used in request headers. */
  API.prototype.getRequestHeaders = function (clientName, clientVersion) {
    let dsn = this._dsnObject
    let header = [`Sentry sentry_version=${ SENTRY_API_VERSION}`]
    header.push(`sentry_timestamp=${ new Date().getTime()}`)
    header.push(`sentry_client=${ clientName }/${ clientVersion}`)
    header.push(`sentry_key=${ dsn.user}`)
    if (dsn.pass) {
      header.push(`sentry_secret=${ dsn.pass}`)
    }
    return {
      'Content-Type': 'application/json',
      'X-Sentry-Auth': header.join(', '),
    }
  }
  /** Returns the url to the report dialog endpoint. */
  API.prototype.getReportDialogEndpoint = function (dialogOptions) {
    if (dialogOptions === void 0) { dialogOptions = {} }
    let dsn = this._dsnObject
    let endpoint = `${ this._getBaseUrl() }${dsn.path ? `/${ dsn.path}` : '' }/api/embed/error-page/`
    let encodedOptions = []
    encodedOptions.push(`dsn=${ dsn.toString()}`)
    for (let key in dialogOptions) {
      if (key === 'user') {
        if (!dialogOptions.user) {
          continue
        }
        if (dialogOptions.user.name) {
          encodedOptions.push(`name=${ encodeURIComponent(dialogOptions.user.name)}`)
        }
        if (dialogOptions.user.email) {
          encodedOptions.push(`email=${ encodeURIComponent(dialogOptions.user.email)}`)
        }
      }
      else {
        encodedOptions.push(`${encodeURIComponent(key) }=${ encodeURIComponent(dialogOptions[key])}`)
      }
    }
    if (encodedOptions.length) {
      return `${endpoint }?${ encodedOptions.join('&')}`
    }
    return endpoint
  }
  return API
}())

let installedIntegrations = []
/** Gets integration to install */
function getIntegrationsToSetup(options) {
  let defaultIntegrations = (options.defaultIntegrations && __spread(options.defaultIntegrations)) || []
  let userIntegrations = options.integrations
  let integrations = []
  if (Array.isArray(userIntegrations)) {
    let userIntegrationsNames_1 = userIntegrations.map(function (i) { return i.name })
    let pickedIntegrationsNames_1 = []
    // Leave only unique default integrations, that were not overridden with provided user integrations
    defaultIntegrations.forEach(function (defaultIntegration) {
      if (userIntegrationsNames_1.indexOf(defaultIntegration.name) === -1
                && pickedIntegrationsNames_1.indexOf(defaultIntegration.name) === -1) {
        integrations.push(defaultIntegration)
        pickedIntegrationsNames_1.push(defaultIntegration.name)
      }
    })
    // Don't add same user integration twice
    userIntegrations.forEach(function (userIntegration) {
      if (pickedIntegrationsNames_1.indexOf(userIntegration.name) === -1) {
        integrations.push(userIntegration)
        pickedIntegrationsNames_1.push(userIntegration.name)
      }
    })
  }
  else if (typeof userIntegrations === 'function') {
    integrations = userIntegrations(defaultIntegrations)
    integrations = Array.isArray(integrations) ? integrations : [integrations]
  }
  else {
    return __spread(defaultIntegrations)
  }
  return integrations
}
/** Setup given integration */
function setupIntegration(integration) {
  if (installedIntegrations.indexOf(integration.name) !== -1) {
    return
  }
  integration.setupOnce(addGlobalEventProcessor, getCurrentHub)
  installedIntegrations.push(integration.name)
  logger.log(`Integration installed: ${ integration.name}`)
}
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
function setupIntegrations(options) {
  let integrations = {}
  getIntegrationsToSetup(options).forEach(function (integration) {
    integrations[integration.name] = integration
    setupIntegration(integration)
  })
  return integrations
}

/**
 * Base implementation for all JavaScript SDK clients.
 *
 * Call the constructor with the corresponding backend constructor and options
 * specific to the client subclass. To access these options later, use
 * {@link Client.getOptions}. Also, the Backend instance is available via
 * {@link Client.getBackend}.
 *
 * If a Dsn is specified in the options, it will be parsed and stored. Use
 * {@link Client.getDsn} to retrieve the Dsn at any moment. In case the Dsn is
 * invalid, the constructor will throw a {@link SentryException}. Note that
 * without a valid Dsn, the SDK will not send any events to Sentry.
 *
 * Before sending an event via the backend, it is passed through
 * {@link BaseClient.prepareEvent} to add SDK information and scope data
 * (breadcrumbs and context). To add more custom information, override this
 * method and extend the resulting prepared event.
 *
 * To issue automatically created events (e.g. via instrumentation), use
 * {@link Client.captureEvent}. It will prepare the event and pass it through
 * the callback lifecycle. To issue auto-breadcrumbs, use
 * {@link Client.addBreadcrumb}.
 *
 * @example
 * class NodeClient extends BaseClient<NodeBackend, NodeOptions> {
 *   public constructor(options: NodeOptions) {
 *     super(NodeBackend, options);
 *   }
 *
 *   // ...
 * }
 */
let BaseClient = /** @class */ (function () {
  /**
     * Initializes this client instance.
     *
     * @param backendClass A constructor function to create the backend.
     * @param options Options for the client.
     */
  function BaseClient(backendClass, options) {
    /** Is the client still processing a call? */
    this._processing = false
    this._backend = new backendClass(options)
    this._options = options
    if (options.dsn) {
      this._dsn = new Dsn(options.dsn)
    }
    this._integrations = setupIntegrations(this._options)
  }
  /**
     * @inheritDoc
     */
  BaseClient.prototype.captureException = function (exception, hint, scope) {
    let _this = this
    let eventId = hint && hint.event_id
    this._processing = true
    this._getBackend()
      .eventFromException(exception, hint)
      .then(function (event) { return _this._processEvent(event, hint, scope) })
      .then(function (finalEvent) {
        // We need to check for finalEvent in case beforeSend returned null
        eventId = finalEvent && finalEvent.event_id
        _this._processing = false
      })
      .catch(function (reason) {
        logger.error(reason)
        _this._processing = false
      })
    return eventId
  }
  /**
     * @inheritDoc
     */
  BaseClient.prototype.captureMessage = function (message, level, hint, scope) {
    let _this = this
    let eventId = hint && hint.event_id
    this._processing = true
    let promisedEvent = isPrimitive(message)
      ? this._getBackend().eventFromMessage(`${ message}`, level, hint)
      : this._getBackend().eventFromException(message, hint)
    promisedEvent
      .then(function (event) { return _this._processEvent(event, hint, scope) })
      .then(function (finalEvent) {
        // We need to check for finalEvent in case beforeSend returned null
        eventId = finalEvent && finalEvent.event_id
        _this._processing = false
      })
      .catch(function (reason) {
        logger.error(reason)
        _this._processing = false
      })
    return eventId
  }
  /**
     * @inheritDoc
     */
  BaseClient.prototype.captureEvent = function (event, hint, scope) {
    let _this = this
    let eventId = hint && hint.event_id
    this._processing = true
    this._processEvent(event, hint, scope)
      .then(function (finalEvent) {
        // We need to check for finalEvent in case beforeSend returned null
        eventId = finalEvent && finalEvent.event_id
        _this._processing = false
      })
      .catch(function (reason) {
        logger.error(reason)
        _this._processing = false
      })
    return eventId
  }
  /**
     * @inheritDoc
     */
  BaseClient.prototype.getDsn = function () {
    return this._dsn
  }
  /**
     * @inheritDoc
     */
  BaseClient.prototype.getOptions = function () {
    return this._options
  }
  /**
     * @inheritDoc
     */
  BaseClient.prototype.flush = function (timeout) {
    let _this = this
    return this._isClientProcessing(timeout).then(function (status) {
      clearInterval(status.interval)
      return _this._getBackend()
        .getTransport()
        .close(timeout)
        .then(function (transportFlushed) { return status.ready && transportFlushed })
    })
  }
  /**
     * @inheritDoc
     */
  BaseClient.prototype.close = function (timeout) {
    let _this = this
    return this.flush(timeout).then(function (result) {
      _this.getOptions().enabled = false
      return result
    })
  }
  /**
     * @inheritDoc
     */
  BaseClient.prototype.getIntegrations = function () {
    return this._integrations || {}
  }
  /**
     * @inheritDoc
     */
  BaseClient.prototype.getIntegration = function (integration) {
    try {
      return this._integrations[integration.id] || null
    }
    catch (_oO) {
      logger.warn(`Cannot retrieve integration ${ integration.id } from the current Client`)
      return null
    }
  }
  /** Waits for the client to be done with processing. */
  BaseClient.prototype._isClientProcessing = function (timeout) {
    let _this = this
    return new Promise(function (resolve) {
      let ticked = 0
      let tick = 1
      let interval = 0
      clearInterval(interval)
      interval = setInterval(function () {
        if (!_this._processing) {
          resolve({
            interval: interval,
            ready: true,
          })
        }
        else {
          ticked += tick
          if (timeout && ticked >= timeout) {
            resolve({
              interval: interval,
              ready: false,
            })
          }
        }
      }, tick)
    })
  }
  /** Returns the current backend. */
  BaseClient.prototype._getBackend = function () {
    return this._backend
  }
  /** Determines whether this SDK is enabled and a valid Dsn is present. */
  BaseClient.prototype._isEnabled = function () {
    return this.getOptions().enabled !== false && this._dsn !== undefined
  }
  /**
     * Adds common information to events.
     *
     * The information includes release and environment from `options`,
     * breadcrumbs and context (extra, tags and user) from the scope.
     *
     * Information that is already present in the event is never overwritten. For
     * nested objects, such as the context, keys are merged.
     *
     * @param event The original event.
     * @param hint May contain additional informartion about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A new event with more information.
     */
  BaseClient.prototype._prepareEvent = function (event, scope, hint) {
    let _a = this.getOptions(), environment = _a.environment, release = _a.release, dist = _a.dist, _b = _a.maxValueLength, maxValueLength = _b === void 0 ? 250 : _b
    let prepared = __assign({}, event)
    if (prepared.environment === undefined && environment !== undefined) {
      prepared.environment = environment
    }
    if (prepared.release === undefined && release !== undefined) {
      prepared.release = release
    }
    if (prepared.dist === undefined && dist !== undefined) {
      prepared.dist = dist
    }
    if (prepared.message) {
      prepared.message = truncate(prepared.message, maxValueLength)
    }
    let exception = prepared.exception && prepared.exception.values && prepared.exception.values[0]
    if (exception && exception.value) {
      exception.value = truncate(exception.value, maxValueLength)
    }
    let request = prepared.request
    if (request && request.url) {
      request.url = truncate(request.url, maxValueLength)
    }
    if (prepared.event_id === undefined) {
      prepared.event_id = uuid4()
    }
    this._addIntegrations(prepared.sdk)
    // We prepare the result here with a resolved Event.
    let result = SyncPromise.resolve(prepared)
    // This should be the last thing called, since we want that
    // {@link Hub.addEventProcessor} gets the finished prepared event.
    if (scope) {
      // In case we have a hub we reassign it.
      result = scope.applyToEvent(prepared, hint)
    }
    return result
  }
  /**
     * This function adds all used integrations to the SDK info in the event.
     * @param sdkInfo The sdkInfo of the event that will be filled with all integrations.
     */
  BaseClient.prototype._addIntegrations = function (sdkInfo) {
    let integrationsArray = Object.keys(this._integrations)
    if (sdkInfo && integrationsArray.length > 0) {
      sdkInfo.integrations = integrationsArray
    }
  }
  /**
     * Processes an event (either error or message) and sends it to Sentry.
     *
     * This also adds breadcrumbs and context information to the event. However,
     * platform specific meta data (such as the User's IP address) must be added
     * by the SDK implementor.
     *
     *
     * @param event The event to send to Sentry.
     * @param hint May contain additional informartion about the original exception.
     * @param scope A scope containing event metadata.
     * @returns A SyncPromise that resolves with the event or rejects in case event was/will not be send.
     */
  BaseClient.prototype._processEvent = function (event, hint, scope) {
    let _this = this
    let _a = this.getOptions(), beforeSend = _a.beforeSend, sampleRate = _a.sampleRate
    if (!this._isEnabled()) {
      return SyncPromise.reject('SDK not enabled, will not send event.')
    }
    // 1.0 === 100% events are sent
    // 0.0 === 0% events are sent
    if (typeof sampleRate === 'number' && Math.random() > sampleRate) {
      return SyncPromise.reject('This event has been sampled, will not send event.')
    }
    return new SyncPromise(function (resolve, reject) {
      _this._prepareEvent(event, scope, hint).then(function (prepared) {
        if (prepared === null) {
          reject('An event processor returned null, will not send event.')
          return
        }
        let finalEvent = prepared
        try {
          let isInternalException = hint && hint.data && hint.data.__sentry__ === true
          if (isInternalException || !beforeSend) {
            _this._getBackend().sendEvent(finalEvent)
            resolve(finalEvent)
            return
          }
          let beforeSendResult = beforeSend(prepared, hint)
          if (typeof beforeSendResult === 'undefined') {
            logger.error('`beforeSend` method has to return `null` or a valid event.')
          }
          else if (isThenable(beforeSendResult)) {
            _this._handleAsyncBeforeSend(beforeSendResult, resolve, reject)
          }
          else {
            finalEvent = beforeSendResult
            if (finalEvent === null) {
              logger.log('`beforeSend` returned `null`, will not send event.')
              resolve(null)
              return
            }
            // From here on we are really async
            _this._getBackend().sendEvent(finalEvent)
            resolve(finalEvent)
          }
        }
        catch (exception) {
          _this.captureException(exception, {
            data: {
              __sentry__: true,
            },
            originalException: exception,
          })
          reject('`beforeSend` throw an error, will not send event.')
        }
      })
    })
  }
  /**
     * Resolves before send Promise and calls resolve/reject on parent SyncPromise.
     */
  BaseClient.prototype._handleAsyncBeforeSend = function (beforeSend, resolve, reject) {
    let _this = this
    beforeSend
      .then(function (processedEvent) {
        if (processedEvent === null) {
          reject('`beforeSend` returned `null`, will not send event.')
          return
        }
        // From here on we are really async
        _this._getBackend().sendEvent(processedEvent)
        resolve(processedEvent)
      })
      .catch(function (e) {
        reject(`beforeSend rejected with ${ e}`)
      })
  }
  return BaseClient
}())

/** Noop transport */
let NoopTransport = /** @class */ (function () {
  function NoopTransport() {
  }
  /**
     * @inheritDoc
     */
  NoopTransport.prototype.sendEvent = function (_) {
    return Promise.resolve({
      reason: 'NoopTransport: Event has been skipped because no Dsn is configured.',
      status: exports.Status.Skipped,
    })
  }
  /**
     * @inheritDoc
     */
  NoopTransport.prototype.close = function (_) {
    return Promise.resolve(true)
  }
  return NoopTransport
}())

/**
 * This is the base implemention of a Backend.
 * @hidden
 */
let BaseBackend = /** @class */ (function () {
  /** Creates a new backend instance. */
  function BaseBackend(options) {
    this._options = options
    if (!this._options.dsn) {
      logger.warn('No DSN provided, backend will not do anything.')
    }
    this._transport = this._setupTransport()
  }
  /**
     * Sets up the transport so it can be used later to send requests.
     */
  BaseBackend.prototype._setupTransport = function () {
    return new NoopTransport()
  }
  /**
     * @inheritDoc
     */
  BaseBackend.prototype.eventFromException = function (_exception, _hint) {
    throw new SentryError('Backend has to implement `eventFromException` method')
  }
  /**
     * @inheritDoc
     */
  BaseBackend.prototype.eventFromMessage = function (_message, _level, _hint) {
    throw new SentryError('Backend has to implement `eventFromMessage` method')
  }
  /**
     * @inheritDoc
     */
  BaseBackend.prototype.sendEvent = function (event) {
    this._transport.sendEvent(event).catch(function (reason) {
      logger.error(`Error while sending event: ${ reason}`)
    })
  }
  /**
     * @inheritDoc
     */
  BaseBackend.prototype.getTransport = function () {
    return this._transport
  }
  return BaseBackend
}())

/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instanciate.
 * @param options Options to pass to the client.
 */
function initAndBind(clientClass, options) {
  if (options.debug === true) {
    logger.enable()
  }
  getCurrentHub().bindClient(new clientClass(options))
}

let originalFunctionToString
/** Patch toString calls to return proper name for wrapped functions */
let FunctionToString = /** @class */ (function () {
  function FunctionToString() {
    /**
         * @inheritDoc
         */
    this.name = FunctionToString.id
  }
  /**
     * @inheritDoc
     */
  FunctionToString.prototype.setupOnce = function () {
    originalFunctionToString = Function.prototype.toString
    Function.prototype.toString = function () {
      let args = []
      for (let _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
      }
      let context = this.__sentry__ ? this.__sentry_original__ : this
      // tslint:disable-next-line:no-unsafe-any
      return originalFunctionToString.apply(context, args)
    }
  }
  /**
     * @inheritDoc
     */
  FunctionToString.id = 'FunctionToString'
  return FunctionToString
}())

// "Script error." is hard coded into browsers for errors that it can't read.
// this is the result of a script being pulled in from an external domain and CORS.
let DEFAULT_IGNORE_ERRORS = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
/** Inbound filters configurable by the user */
let InboundFilters = /** @class */ (function () {
  function InboundFilters(_options) {
    if (_options === void 0) { _options = {} }
    this._options = _options
    /**
         * @inheritDoc
         */
    this.name = InboundFilters.id
  }
  /**
     * @inheritDoc
     */
  InboundFilters.prototype.setupOnce = function () {
    addGlobalEventProcessor(function (event) {
      let hub = getCurrentHub()
      if (!hub) {
        return event
      }
      let self = hub.getIntegration(InboundFilters)
      if (self) {
        let client = hub.getClient()
        let clientOptions = client ? client.getOptions() : {}
        let options = self._mergeOptions(clientOptions)
        if (self._shouldDropEvent(event, options)) {
          return null
        }
      }
      return event
    })
  }
  /** JSDoc */
  InboundFilters.prototype._shouldDropEvent = function (event, options) {
    if (this._isSentryError(event, options)) {
      logger.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${ getEventDescription(event)}`)
      return true
    }
    if (this._isIgnoredError(event, options)) {
      logger.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${ getEventDescription(event)}`)
      return true
    }
    if (this._isBlacklistedUrl(event, options)) {
      logger.warn(`Event dropped due to being matched by \`blacklistUrls\` option.\nEvent: ${ getEventDescription(event) }.\nUrl: ${ this._getEventFilterUrl(event)}`)
      return true
    }
    if (!this._isWhitelistedUrl(event, options)) {
      logger.warn(`Event dropped due to not being matched by \`whitelistUrls\` option.\nEvent: ${ getEventDescription(event) }.\nUrl: ${ this._getEventFilterUrl(event)}`)
      return true
    }
    return false
  }
  /** JSDoc */
  InboundFilters.prototype._isSentryError = function (event, options) {
    if (options === void 0) { options = {} }
    if (!options.ignoreInternal) {
      return false
    }
    try {
      // tslint:disable-next-line:no-unsafe-any
      return event.exception.values[0].type === 'SentryError'
    }
    catch (_oO) {
      return false
    }
  }
  /** JSDoc */
  InboundFilters.prototype._isIgnoredError = function (event, options) {
    if (options === void 0) { options = {} }
    if (!options.ignoreErrors || !options.ignoreErrors.length) {
      return false
    }
    return this._getPossibleEventMessages(event).some(function (message) {
      // Not sure why TypeScript complains here...
      return options.ignoreErrors.some(function (pattern) { return isMatchingPattern(message, pattern) })
    })
  }
  /** JSDoc */
  InboundFilters.prototype._isBlacklistedUrl = function (event, options) {
    if (options === void 0) { options = {} }
    // TODO: Use Glob instead?
    if (!options.blacklistUrls || !options.blacklistUrls.length) {
      return false
    }
    let url = this._getEventFilterUrl(event)
    return !url ? false : options.blacklistUrls.some(function (pattern) { return isMatchingPattern(url, pattern) })
  }
  /** JSDoc */
  InboundFilters.prototype._isWhitelistedUrl = function (event, options) {
    if (options === void 0) { options = {} }
    // TODO: Use Glob instead?
    if (!options.whitelistUrls || !options.whitelistUrls.length) {
      return true
    }
    let url = this._getEventFilterUrl(event)
    return !url ? true : options.whitelistUrls.some(function (pattern) { return isMatchingPattern(url, pattern) })
  }
  /** JSDoc */
  InboundFilters.prototype._mergeOptions = function (clientOptions) {
    if (clientOptions === void 0) { clientOptions = {} }
    return {
      blacklistUrls: __spread((this._options.blacklistUrls || []), (clientOptions.blacklistUrls || [])),
      ignoreErrors: __spread((this._options.ignoreErrors || []), (clientOptions.ignoreErrors || []), DEFAULT_IGNORE_ERRORS),
      ignoreInternal: typeof this._options.ignoreInternal !== 'undefined' ? this._options.ignoreInternal : true,
      whitelistUrls: __spread((this._options.whitelistUrls || []), (clientOptions.whitelistUrls || [])),
    }
  }
  /** JSDoc */
  InboundFilters.prototype._getPossibleEventMessages = function (event) {
    if (event.message) {
      return [event.message]
    }
    if (event.exception) {
      try {
        // tslint:disable-next-line:no-unsafe-any
        let _a = event.exception.values[0], type = _a.type, value = _a.value
        return [`${ value}`, `${type }: ${ value}`]
      }
      catch (oO) {
        logger.error(`Cannot extract message for event ${ getEventDescription(event)}`)
        return []
      }
    }
    return []
  }
  /** JSDoc */
  InboundFilters.prototype._getEventFilterUrl = function (event) {
    try {
      if (event.stacktrace) {
        // tslint:disable:no-unsafe-any
        let frames_1 = event.stacktrace.frames
        return frames_1[frames_1.length - 1].filename
      }
      if (event.exception) {
        // tslint:disable:no-unsafe-any
        let frames_2 = event.exception.values[0].stacktrace.frames
        return frames_2[frames_2.length - 1].filename
      }
      return null
    }
    catch (oO) {
      logger.error(`Cannot extract url for event ${ getEventDescription(event)}`)
      return null
    }
  }
  /**
     * @inheritDoc
     */
  InboundFilters.id = 'InboundFilters'
  return InboundFilters
}())

let CoreIntegrations = /*#__PURE__*/Object.freeze({
  FunctionToString: FunctionToString,
  InboundFilters: InboundFilters,
})

let SDK_NAME = 'sentry.javascript.wechat-miniprogram'
let SDK_VERSION = '"0.0.0"'

// tslint:disable
/**
 * TraceKit - Cross brower stack traces
 *
 * This was originally forked from github.com/occ/TraceKit, but has since been
 * largely modified and is now maintained as part of Sentry JS SDK.
 *
 * NOTE: Last merge with upstream repository
 * Jul 11,2018 - #f03357c
 *
 * https://github.com/csnover/TraceKit
 * @license MIT
 * @namespace TraceKit
 */
let window$1 = getGlobalObject()
let TraceKit = {
  _report: false,
  _collectWindowErrors: false,
  _computeStackTrace: false,
  _linesOfContext: false,
}
// var TraceKit: TraceKitInterface = {};
// var TraceKit = {};
// global reference to slice
let UNKNOWN_FUNCTION = '?'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types
let ERROR_TYPES_RE = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/
/**
 * A better form of hasOwnProperty<br/>
 * Example: `_has(MainHostObject, property) === true/false`
 *
 * @param {Object} object to check property
 * @param {string} key to check
 * @return {Boolean} true if the object has the key and it is not inherited
 */
function _has(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key)
}
/**
 * A safe form of location.href<br/>
 *
 * @return {string} location.href
 */
function getLocationHref() {
  if (typeof document === 'undefined' || document.location == null)
  {return ''}
  return document.location.href
}
/**
 * Cross-browser processing of unhandled exceptions
 *
 * Syntax:
 * ```js
 *   TraceKit.report.subscribe(function(stackInfo) { ... })
 *   TraceKit.report(exception)
 *   try { ...code... } catch(ex) { TraceKit.report(ex); }
 * ```
 *
 * Supports:
 *   - Firefox: full stack trace with line numbers, plus column number
 *     on top frame; column number is not guaranteed
 *   - Opera: full stack trace with line and column numbers
 *   - Chrome: full stack trace with line and column numbers
 *   - Safari: line and column number for the top frame only; some frames
 *     may be missing, and column number is not guaranteed
 *   - IE: line and column number for the top frame only; some frames
 *     may be missing, and column number is not guaranteed
 *
 * In theory, TraceKit should work on all of the following versions:
 *   - IE5.5+ (only 8.0 tested)
 *   - Firefox 0.9+ (only 3.5+ tested)
 *   - Opera 7+ (only 10.50 tested; versions 9 and earlier may require
 *     Exceptions Have Stacktrace to be enabled in opera:config)
 *   - Safari 3+ (only 4+ tested)
 *   - Chrome 1+ (only 5+ tested)
 *   - Konqueror 3.5+ (untested)
 *
 * Requires TraceKit._computeStackTrace.
 *
 * Tries to catch all unhandled exceptions and report them to the
 * subscribed handlers. Please note that TraceKit.report will rethrow the
 * exception. This is REQUIRED in order to get a useful stack trace in IE.
 * If the exception does not reach the top of the browser, you will only
 * get a stack trace from the point where TraceKit.report was called.
 *
 * Handlers receive a TraceKit.StackTrace object as described in the
 * TraceKit._computeStackTrace docs.
 *
 * @memberof TraceKit
 * @namespace
 */
TraceKit._report = (function reportModuleWrapper() {
  let handlers = [], lastException = null, lastExceptionStack = null
  /**
     * Add a crash handler.
     * @param {Function} handler
     * @memberof TraceKit.report
     */
  function _subscribe(handler) {
    // NOTE: We call both handlers manually in browser/integrations/globalhandler.ts
    // So user can choose which one he wants to attach
    // installGlobalHandler();
    // installGlobalUnhandledRejectionHandler();
    handlers.push(handler)
  }
  /**
     * Dispatch stack information to all handlers.
     * @param {TraceKit.StackTrace} stack
     * @param {boolean} isWindowError Is this a top-level window error?
     * @param {Error=} error The error that's being handled (if available, null otherwise)
     * @memberof TraceKit.report
     * @throws An exception if an error occurs while calling an handler.
     */
  function _notifyHandlers(stack, isWindowError, error) {
    let exception = null
    if (isWindowError && !TraceKit._collectWindowErrors) {
      return
    }
    for (let i in handlers) {
      if (_has(handlers, i)) {
        try {
          handlers[i](stack, isWindowError, error)
        }
        catch (inner) {
          exception = inner
        }
      }
    }
    if (exception) {
      throw exception
    }
  }
  let _oldOnerrorHandler, _onErrorHandlerInstalled
  /**
     * Ensures all global unhandled exceptions are recorded.
     * Supported by Gecko and IE.
     * @param {string} message Error message.
     * @param {string} url URL of script that generated the exception.
     * @param {(number|string)} lineNo The line number at which the error occurred.
     * @param {(number|string)=} columnNo The column number at which the error occurred.
     * @param {Error=} errorObj The actual Error object.
     * @memberof TraceKit.report
     */
  function _traceKitWindowOnError(message, url, lineNo, columnNo, errorObj) {
    let stack = null
    // If 'errorObj' is ErrorEvent, get real Error from inside
    errorObj = isErrorEvent(errorObj) ? errorObj.error : errorObj
    // If 'message' is ErrorEvent, get real message from inside
    message = isErrorEvent(message) ? message.message : message
    if (lastExceptionStack) {
      TraceKit._computeStackTrace._augmentStackTraceWithInitialElement(lastExceptionStack, url, lineNo, message)
      processLastException()
    }
    else if (errorObj && isError(errorObj)) {
      stack = TraceKit._computeStackTrace(errorObj)
      stack.mechanism = 'onerror'
      _notifyHandlers(stack, true, errorObj)
    }
    else {
      let location_1 = {
        url: url,
        line: lineNo,
        column: columnNo,
      }
      let name_1
      let msg = message // must be new var or will modify original `arguments`
      if ({}.toString.call(message) === '[object String]') {
        let groups = message.match(ERROR_TYPES_RE)
        if (groups) {
          name_1 = groups[1]
          msg = groups[2]
        }
      }
      location_1.func = UNKNOWN_FUNCTION
      location_1.context = null
      stack = {
        name: name_1,
        message: msg,
        mode: 'onerror',
        mechanism: 'onerror',
        stack: [
          __assign({}, location_1, {
            // Firefox sometimes doesn't return url correctly and this is an old behavior
            // that I prefer to port here as well.
            // It can be altered only here, as previously it's using `location.url` for other things — Kamil
            url: location_1.url || getLocationHref() }),
        ],
      }
      _notifyHandlers(stack, true, null)
    }
    if (_oldOnerrorHandler) {
      // @ts-ignore
      return _oldOnerrorHandler.apply(this, arguments)
    }
    return false
  }
  /**
     * Ensures all unhandled rejections are recorded.
     * @param {PromiseRejectionEvent} e event.
     * @memberof TraceKit.report
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent
     */
  function _traceKitWindowOnUnhandledRejection(e) {
    let err = (e && (e.detail ? e.detail.reason : e.reason)) || e
    let stack = TraceKit._computeStackTrace(err)
    stack.mechanism = 'onunhandledrejection'
    if (!stack.message) {
      stack.message = JSON.stringify(normalize(err))
    }
    _notifyHandlers(stack, true, err)
  }
  /**
     * Install a global onerror handler
     * @memberof TraceKit.report
     */
  function _installGlobalHandler() {
    if (_onErrorHandlerInstalled === true) {
      return
    }
    _oldOnerrorHandler = window$1.onerror
    window$1.onerror = _traceKitWindowOnError
    _onErrorHandlerInstalled = true
  }
  /**
     * Install a global onunhandledrejection handler
     * @memberof TraceKit.report
     */
  function _installGlobalUnhandledRejectionHandler() {
    window$1.onunhandledrejection = _traceKitWindowOnUnhandledRejection
  }
  /**
     * Process the most recent exception
     * @memberof TraceKit.report
     */
  function processLastException() {
    let _lastExceptionStack = lastExceptionStack, _lastException = lastException
    lastExceptionStack = null
    lastException = null
    _notifyHandlers(_lastExceptionStack, false, _lastException)
  }
  /**
     * Reports an unhandled Error to TraceKit.
     * @param {Error} ex
     * @memberof TraceKit.report
     * @throws An exception if an incomplete stack trace is detected (old IE browsers).
     */
  function _report(ex) {
    if (lastExceptionStack) {
      if (lastException === ex) {
        return // already caught by an inner catch block, ignore
      }
      processLastException()
    }
    let stack = TraceKit._computeStackTrace(ex)
    lastExceptionStack = stack
    lastException = ex
    // If the stack trace is incomplete, wait for 2 seconds for
    // slow slow IE to see if onerror occurs or not before reporting
    // this exception; otherwise, we will end up with an incomplete
    // stack trace
    setTimeout(function () {
      if (lastException === ex) {
        processLastException()
      }
    }, stack.incomplete ? 2000 : 0)
    throw ex // re-throw to propagate to the top level (and cause window.onerror)
  }
  _report._subscribe = _subscribe
  _report._installGlobalHandler = _installGlobalHandler
  _report._installGlobalUnhandledRejectionHandler = _installGlobalUnhandledRejectionHandler
  return _report
})()
/**
 * An object representing a single stack frame.
 * @typedef {Object} StackFrame
 * @property {string} url The JavaScript or HTML file URL.
 * @property {string} func The function name, or empty for anonymous functions (if guessing did not work).
 * @property {string[]?} args The arguments passed to the function, if known.
 * @property {number=} line The line number, if known.
 * @property {number=} column The column number, if known.
 * @property {string[]} context An array of source code lines; the middle element corresponds to the correct line#.
 * @memberof TraceKit
 */
/**
 * An object representing a JavaScript stack trace.
 * @typedef {Object} StackTrace
 * @property {string} name The name of the thrown exception.
 * @property {string} message The exception error message.
 * @property {TraceKit.StackFrame[]} stack An array of stack frames.
 * @property {string} mode 'stack', 'stacktrace', 'multiline', 'callers', 'onerror', or 'failed' -- method used to collect the stack trace.
 * @memberof TraceKit
 */
/**
 * TraceKit._computeStackTrace: cross-browser stack traces in JavaScript
 *
 * Syntax:
 *   ```js
 *   s = TraceKit._computeStackTrace(exception) // consider using TraceKit.report instead (see below)
 *   ```
 *
 * Supports:
 *   - Firefox:  full stack trace with line numbers and unreliable column
 *               number on top frame
 *   - Opera 10: full stack trace with line and column numbers
 *   - Opera 9-: full stack trace with line numbers
 *   - Chrome:   full stack trace with line and column numbers
 *   - Safari:   line and column number for the topmost stacktrace element
 *               only
 *   - IE:       no line numbers whatsoever
 *
 * Tries to guess names of anonymous functions by looking for assignments
 * in the source code. In IE and Safari, we have to guess source file names
 * by searching for function bodies inside all page scripts. This will not
 * work for scripts that are loaded cross-domain.
 * Here be dragons: some function names may be guessed incorrectly, and
 * duplicate functions may be mismatched.
 *
 * TraceKit._computeStackTrace should only be used for tracing purposes.
 * Logging of unhandled exceptions should be done with TraceKit.report,
 * which builds on top of TraceKit._computeStackTrace and provides better
 * IE support by utilizing the window.onerror event to retrieve information
 * about the top of the stack.
 *
 * Note: In IE and Safari, no stack trace is recorded on the Error object,
 * so computeStackTrace instead walks its *own* chain of callers.
 * This means that:
 *  * in Safari, some methods may be missing from the stack trace;
 *  * in IE, the topmost function in the stack trace will always be the
 *    caller of computeStackTrace.
 *
 * This is okay for tracing (because you are likely to be calling
 * computeStackTrace from the function you want to be the topmost element
 * of the stack trace anyway), but not okay for logging unhandled
 * exceptions (because your catch block will likely be far away from the
 * inner function that actually caused the exception).
 *
 * @memberof TraceKit
 * @namespace
 */
TraceKit._computeStackTrace = (function _computeStackTraceWrapper() {
  // Contents of Exception in various browsers.
  //
  // SAFARI:
  // ex.message = Can't find variable: qq
  // ex.line = 59
  // ex.sourceId = 580238192
  // ex.sourceURL = http://...
  // ex.expressionBeginOffset = 96
  // ex.expressionCaretOffset = 98
  // ex.expressionEndOffset = 98
  // ex.name = ReferenceError
  //
  // FIREFOX:
  // ex.message = qq is not defined
  // ex.fileName = http://...
  // ex.lineNumber = 59
  // ex.columnNumber = 69
  // ex.stack = ...stack trace... (see the example below)
  // ex.name = ReferenceError
  //
  // CHROME:
  // ex.message = qq is not defined
  // ex.name = ReferenceError
  // ex.type = not_defined
  // ex.arguments = ['aa']
  // ex.stack = ...stack trace...
  //
  // INTERNET EXPLORER:
  // ex.message = ...
  // ex.name = ReferenceError
  //
  // OPERA:
  // ex.message = ...message... (see the example below)
  // ex.name = ReferenceError
  // ex.opera#sourceloc = 11  (pretty much useless, duplicates the info in ex.message)
  // ex.stacktrace = n/a; see 'opera:config#UserPrefs|Exceptions Have Stacktrace'
  /**
     * Computes stack trace information from the stack property.
     * Chrome and Gecko use this property.
     * @param {Error} ex
     * @return {?TraceKit.StackTrace} Stack trace information.
     * @memberof TraceKit._computeStackTrace
     */
  function _computeStackTraceFromStackProp(ex) {
    if (!ex || !ex.stack) {
      return null
    }
    // Chromium based browsers: Chrome, Brave, new Opera, new Edge
    let chrome = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      // gecko regex: `(?:bundle|\d+\.js)`: `bundle` is for react native, `\d+\.js` also but specifically for ram bundles because it
      // generates filenames without a prefix like `file://` the filenames in the stacktrace are just 42.js
      // We need this specific case for now because we want no other regex to match.
      gecko = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, winjs = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
      // Used to additionally parse URL/line/column from eval frames
      isEval, geckoEval = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, chromeEval = /\((\S*)(?::(\d+))(?::(\d+))\)/, lines = ex.stack.split('\n'), stack = [], submatch, parts, element, reference = /^(.*) is undefined$/.exec(ex.message)
    for (let i = 0, j = lines.length; i < j; ++i) {
      if ((parts = chrome.exec(lines[i]))) {
        let isNative = parts[2] && parts[2].indexOf('native') === 0 // start of line
        isEval = parts[2] && parts[2].indexOf('eval') === 0 // start of line
        if (isEval && (submatch = chromeEval.exec(parts[2]))) {
          // throw out eval line/column and use top-most line/column number
          parts[2] = submatch[1] // url
          parts[3] = submatch[2] // line
          parts[4] = submatch[3] // column
        }
        element = {
          url: parts[2],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: isNative ? [parts[2]] : [],
          line: parts[3] ? +parts[3] : null,
          column: parts[4] ? +parts[4] : null,
        }
      }
      else if ((parts = winjs.exec(lines[i]))) {
        element = {
          url: parts[2],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: [],
          line: +parts[3],
          column: parts[4] ? +parts[4] : null,
        }
      }
      else if ((parts = gecko.exec(lines[i]))) {
        isEval = parts[3] && parts[3].indexOf(' > eval') > -1
        if (isEval && (submatch = geckoEval.exec(parts[3]))) {
          // throw out eval line/column and use top-most line number
          parts[1] = parts[1] || 'eval'
          parts[3] = submatch[1]
          parts[4] = submatch[2]
          parts[5] = '' // no column when eval
        }
        else if (i === 0 && !parts[5] && ex.columnNumber !== void 0) {
          // FireFox uses this awesome columnNumber property for its top frame
          // Also note, Firefox's column number is 0-based and everything else expects 1-based,
          // so adding 1
          // NOTE: this hack doesn't work if top-most frame is eval
          stack[0].column = ex.columnNumber + 1
        }
        element = {
          url: parts[3],
          func: parts[1] || UNKNOWN_FUNCTION,
          args: parts[2] ? parts[2].split(',') : [],
          line: parts[4] ? +parts[4] : null,
          column: parts[5] ? +parts[5] : null,
        }
      }
      else {
        continue
      }
      if (!element.func && element.line) {
        element.func = UNKNOWN_FUNCTION
      }
      element.context = null
      stack.push(element)
    }
    if (!stack.length) {
      return null
    }
    if (stack[0] && stack[0].line && !stack[0].column && reference) {
      stack[0].column = null
    }
    return {
      mode: 'stack',
      name: ex.name,
      message: ex.message,
      stack: stack,
    }
  }
  /**
     * Computes stack trace information from the stacktrace property.
     * Opera 10+ uses this property.
     * @param {Error} ex
     * @return {?TraceKit.StackTrace} Stack trace information.
     * @memberof TraceKit._computeStackTrace
     */
  function _computeStackTraceFromStacktraceProp(ex) {
    // Access and store the stacktrace property before doing ANYTHING
    // else to it because Opera is not very good at providing it
    // reliably in other circumstances.
    let stacktrace = ex.stacktrace
    if (!stacktrace) {
      return
    }
    let opera10Regex = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, opera11Regex = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, lines = stacktrace.split('\n'), stack = [], parts
    for (let line = 0; line < lines.length; line += 2) {
      let element = null
      if ((parts = opera10Regex.exec(lines[line]))) {
        element = {
          url: parts[2],
          line: +parts[1],
          column: null,
          func: parts[3],
          args: [],
        }
      }
      else if ((parts = opera11Regex.exec(lines[line]))) {
        element = {
          url: parts[6],
          line: +parts[1],
          column: +parts[2],
          func: parts[3] || parts[4],
          args: parts[5] ? parts[5].split(',') : [],
        }
      }
      if (element) {
        if (!element.func && element.line) {
          element.func = UNKNOWN_FUNCTION
        }
        if (element.line) {
          element.context = null
        }
        if (!element.context) {
          element.context = [lines[line + 1]]
        }
        stack.push(element)
      }
    }
    if (!stack.length) {
      return null
    }
    return {
      mode: 'stacktrace',
      name: ex.name,
      message: ex.message,
      stack: stack,
    }
  }
  /**
     * NOT TESTED.
     * Computes stack trace information from an error message that includes
     * the stack trace.
     * Opera 9 and earlier use this method if the option to show stack
     * traces is turned on in opera:config.
     * @param {Error} ex
     * @return {?TraceKit.StackTrace} Stack information.
     * @memberof TraceKit._computeStackTrace
     */
  function _computeStackTraceFromOperaMultiLineMessage(ex) {
    // TODO: Clean this function up
    // Opera includes a stack trace into the exception message. An example is:
    //
    // Statement on line 3: Undefined variable: undefinedFunc
    // Backtrace:
    //   Line 3 of linked script file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.js: In function zzz
    //         undefinedFunc(a);
    //   Line 7 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html: In function yyy
    //           zzz(x, y, z);
    //   Line 3 of inline#1 script in file://localhost/Users/andreyvit/Projects/TraceKit/javascript-client/sample.html: In function xxx
    //           yyy(a, a, a);
    //   Line 1 of function script
    //     try { xxx('hi'); return false; } catch(ex) { TraceKit.report(ex); }
    //   ...
    let lines = ex.message.split('\n')
    if (lines.length < 4) {
      return null
    }
    let lineRE1 = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, lineRE2 = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, lineRE3 = /^\s*Line (\d+) of function script\s*$/i, stack = [], scripts = window$1 && window$1.document && window$1.document.getElementsByTagName('script'), inlineScriptBlocks = [], parts
    for (let s in scripts) {
      if (_has(scripts, s) && !scripts[s].src) {
        inlineScriptBlocks.push(scripts[s])
      }
    }
    for (let line = 2; line < lines.length; line += 2) {
      let item = null
      if ((parts = lineRE1.exec(lines[line]))) {
        item = {
          url: parts[2],
          func: parts[3],
          args: [],
          line: +parts[1],
          column: null,
        }
      }
      else if ((parts = lineRE2.exec(lines[line]))) {
        item = {
          url: parts[3],
          func: parts[4],
          args: [],
          line: +parts[1],
          column: null,
        }
      }
      else if ((parts = lineRE3.exec(lines[line]))) {
        let url = getLocationHref().replace(/#.*$/, '')
        item = {
          url: url,
          func: '',
          args: [],
          line: parts[1],
          column: null,
        }
      }
      if (item) {
        if (!item.func) {
          item.func = UNKNOWN_FUNCTION
        }
        // if (context) alert("Context mismatch. Correct midline:\n" + lines[i+1] + "\n\nMidline:\n" + midline + "\n\nContext:\n" + context.join("\n") + "\n\nURL:\n" + item.url);
        item.context = [lines[line + 1]]
        stack.push(item)
      }
    }
    if (!stack.length) {
      return null // could not parse multiline exception message as Opera stack trace
    }
    return {
      mode: 'multiline',
      name: ex.name,
      message: lines[0],
      stack: stack,
    }
  }
  /**
     * Adds information about the first frame to incomplete stack traces.
     * Safari and IE require this to get complete data on the first frame.
     * @param {TraceKit.StackTrace} stackInfo Stack trace information from
     * one of the compute* methods.
     * @param {string} url The URL of the script that caused an error.
     * @param {(number|string)} lineNo The line number of the script that
     * caused an error.
     * @param {string=} message The error generated by the browser, which
     * hopefully contains the name of the object that caused the error.
     * @return {boolean} Whether or not the stack information was
     * augmented.
     * @memberof TraceKit._computeStackTrace
     */
  function _augmentStackTraceWithInitialElement(stackInfo, url, lineNo, message) {
    let initial = {
      url: url,
      line: lineNo,
    }
    if (initial.url && initial.line) {
      stackInfo.incomplete = false
      if (!initial.func) {
        initial.func = UNKNOWN_FUNCTION
      }
      if (!initial.context) {
        initial.context = null
      }
      let reference = / '([^']+)' /.exec(message)
      if (reference) {
        initial.column = null
      }
      if (stackInfo.stack.length > 0) {
        if (stackInfo.stack[0].url === initial.url) {
          if (stackInfo.stack[0].line === initial.line) {
            return false // already in stack trace
          }
          else if (!stackInfo.stack[0].line && stackInfo.stack[0].func === initial.func) {
            stackInfo.stack[0].line = initial.line
            stackInfo.stack[0].context = initial.context
            return false
          }
        }
      }
      stackInfo.stack.unshift(initial)
      stackInfo.partial = true
      return true
    }
    stackInfo.incomplete = true
    return false
  }
  /**
     * Computes stack trace information by walking the arguments.caller
     * chain at the time the exception occurred. This will cause earlier
     * frames to be missed but is the only way to get any stack trace in
     * Safari and IE. The top frame is restored by
     * {@link augmentStackTraceWithInitialElement}.
     * @param {Error} ex
     * @return {TraceKit.StackTrace=} Stack trace information.
     * @memberof TraceKit._computeStackTrace
     */
  function _computeStackTraceByWalkingCallerChain(ex, depth) {
    let functionName = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, stack = [], funcs = {}, recursion = false, parts, item
    for (let curr = _computeStackTraceByWalkingCallerChain.caller; curr && !recursion; curr = curr.caller) {
      if (curr === _computeStackTrace || curr === TraceKit._report) {
        continue
      }
      item = {
        url: null,
        func: UNKNOWN_FUNCTION,
        args: [],
        line: null,
        column: null,
      }
      if (curr.name) {
        item.func = curr.name
      }
      else if ((parts = functionName.exec(curr.toString()))) {
        item.func = parts[1]
      }
      if (typeof item.func === 'undefined') {
        try {
          item.func = parts.input.substring(0, parts.input.indexOf('{'))
        }
        catch (e) { }
      }
      if (funcs[`${ curr}`]) {
        recursion = true
      }
      else {
        funcs[`${ curr}`] = true
      }
      stack.push(item)
    }
    if (depth) {
      stack.splice(0, depth)
    }
    let result = {
      mode: 'callers',
      name: ex.name,
      message: ex.message,
      stack: stack,
    }
    _augmentStackTraceWithInitialElement(result, ex.sourceURL || ex.fileName, ex.line || ex.lineNumber, ex.message || ex.description)
    return result
  }
  /**
     * Computes a stack trace for an exception.
     * @param {Error} ex
     * @param {(string|number)=} depth
     * @memberof TraceKit._computeStackTrace
     */
  function computeStackTrace(ex, depth) {
    let stack = null
    depth = depth == null ? 0 : +depth
    try {
      // This must be tried first because Opera 10 *destroys*
      // its stacktrace property if you try to access the stack
      // property first!!
      stack = _computeStackTraceFromStacktraceProp(ex)
      if (stack) {
        return stack
      }
    }
    catch (e) { }
    try {
      stack = _computeStackTraceFromStackProp(ex)
      if (stack) {
        return stack
      }
    }
    catch (e) { }
    try {
      stack = _computeStackTraceFromOperaMultiLineMessage(ex)
      if (stack) {
        return stack
      }
    }
    catch (e) { }
    try {
      stack = _computeStackTraceByWalkingCallerChain(ex, depth + 1)
      if (stack) {
        return stack
      }
    }
    catch (e) { }
    return {
      original: ex,
      name: ex.name,
      message: ex.message,
      mode: 'failed',
    }
  }
  computeStackTrace._augmentStackTraceWithInitialElement = _augmentStackTraceWithInitialElement
  computeStackTrace._computeStackTraceFromStackProp = _computeStackTraceFromStackProp
  return computeStackTrace
})()
TraceKit._collectWindowErrors = true
TraceKit._linesOfContext = 11
let _subscribe = TraceKit._report._subscribe
let _installGlobalHandler = TraceKit._report._installGlobalHandler
let _installGlobalUnhandledRejectionHandler = TraceKit._report._installGlobalUnhandledRejectionHandler
var _computeStackTrace = TraceKit._computeStackTrace

let STACKTRACE_LIMIT = 50
/**
 * This function creates an exception from an TraceKitStackTrace
 * @param stacktrace TraceKitStackTrace that will be converted to an exception
 * @hidden
 */
function exceptionFromStacktrace(stacktrace) {
  let frames = prepareFramesForEvent(stacktrace.stack)
  let exception = {
    type: stacktrace.name,
    value: stacktrace.message,
  }
  if (frames && frames.length) {
    exception.stacktrace = { frames: frames }
  }
  // tslint:disable-next-line:strict-type-predicates
  if (exception.type === undefined && exception.value === '') {
    exception.value = 'Unrecoverable error caught'
  }
  return exception
}
/**
 * @hidden
 */
function eventFromPlainObject(exception, syntheticException) {
  let exceptionKeys = Object.keys(exception).sort()
  let event = {
    extra: {
      __serialized__: normalizeToSize(exception),
    },
    message: `Non-Error exception captured with keys: ${ keysToEventMessage(exceptionKeys)}`,
  }
  if (syntheticException) {
    let stacktrace = _computeStackTrace(syntheticException)
    let frames_1 = prepareFramesForEvent(stacktrace.stack)
    event.stacktrace = {
      frames: frames_1,
    }
  }
  return event
}
/**
 * @hidden
 */
function eventFromStacktrace(stacktrace) {
  let exception = exceptionFromStacktrace(stacktrace)
  return {
    exception: {
      values: [exception],
    },
  }
}
/**
 * @hidden
 */
function prepareFramesForEvent(stack) {
  if (!stack || !stack.length) {
    return []
  }
  let localStack = stack
  let firstFrameFunction = localStack[0].func || ''
  let lastFrameFunction = localStack[localStack.length - 1].func || ''
  // If stack starts with one of our API calls, remove it (starts, meaning it's the top of the stack - aka last call)
  if (firstFrameFunction.includes('captureMessage') || firstFrameFunction.includes('captureException')) {
    localStack = localStack.slice(1)
  }
  // If stack ends with one of our internal API calls, remove it (ends, meaning it's the bottom of the stack - aka top-most call)
  if (lastFrameFunction.includes('sentryWrapped')) {
    localStack = localStack.slice(0, -1)
  }
  // The frame where the crash happened, should be the last entry in the array
  return localStack
    .map(function (frame) { return ({
      colno: frame.column,
      filename: frame.url || localStack[0].url,
      function: frame.func || '?',
      in_app: true,
      lineno: frame.line,
    }) })
    .slice(0, STACKTRACE_LIMIT)
    .reverse()
}

/** Base Transport class implementation */
let BaseTransport = /** @class */ (function () {
  function BaseTransport(options) {
    this.options = options
    /** A simple buffer holding all requests. */
    this._buffer = new PromiseBuffer(30)
    this.url = new API(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()
  }
  /**
     * @inheritDoc
     */
  BaseTransport.prototype.sendEvent = function (_) {
    throw new SentryError('Transport Class has to implement `sendEvent` method')
  }
  /**
     * @inheritDoc
     */
  BaseTransport.prototype.close = function (timeout) {
    return this._buffer.drain(timeout)
  }
  return BaseTransport
}())

/** `wx.request` based transport */
let RequestTransport = /** @class */ (function (_super) {
  __extends(RequestTransport, _super)
  function RequestTransport() {
    return _super !== null && _super.apply(this, arguments) || this
  }
  /**
     * @inheritDoc
     */
  RequestTransport.prototype.sendEvent = function (event) {
    let _this = this
    return this._buffer.add(new Promise(function (resolve, reject) {
      wx.request({
        url: _this.url,
        method: 'POST',
        data: event,
        success: function (res) {
          if (res.statusCode === 200) {
            resolve({
              status: exports.Status.fromHttpCode(res.statusCode),
            })
          }
          else {
            reject(res)
          }
        },
        fail: function (err) {
          reject(err)
        },
      })
    }))
  }
  return RequestTransport
}(BaseTransport))

let index = /*#__PURE__*/Object.freeze({
  BaseTransport: BaseTransport,
  RequestTransport: RequestTransport,
})

/**
 * The Sentry Wechat Miniprogram SDK Backend.
 * @hidden
 */
let WechatMiniprogramBackend = /** @class */ (function (_super) {
  __extends(WechatMiniprogramBackend, _super)
  function WechatMiniprogramBackend() {
    return _super !== null && _super.apply(this, arguments) || this
  }
  /**
     * @inheritDoc
     */
  WechatMiniprogramBackend.prototype._setupTransport = function () {
    if (!this._options.dsn) {
      // We return the noop transport here in case there is no Dsn.
      return _super.prototype._setupTransport.call(this)
    }
    let transportOptions = __assign({}, this._options.transportOptions, { dsn: this._options.dsn })
    if (this._options.transport) {
      return new this._options.transport(transportOptions)
    }
    return new RequestTransport(transportOptions)
  }
  /**
     * @inheritDoc
     */
  WechatMiniprogramBackend.prototype.eventFromException = function (exception, hint) {
    let _this = this
    let event
    if (isErrorEvent(exception) && exception.error) {
      // If it is an ErrorEvent with `error` property, extract it to get actual Error
      let errorEvent = exception
      exception = errorEvent.error // tslint:disable-line:no-parameter-reassignment
      event = eventFromStacktrace(_computeStackTrace(exception))
      return SyncPromise.resolve(this._buildEvent(event, hint))
    }
    if (isError(exception)) {
      // we have a real Error object, do nothing
      event = eventFromStacktrace(_computeStackTrace(exception))
      return SyncPromise.resolve(this._buildEvent(event, hint))
    }
    if (isPlainObject(exception) && hint && hint.syntheticException) {
      // If it is plain Object, serialize it manually and extract options
      // This will allow us to group events based on top-level keys
      // which is much better than creating new group when any key/value change
      let objectException = exception
      event = eventFromPlainObject(objectException, hint.syntheticException)
      addExceptionTypeValue(event, 'Custom Object', undefined, {
        handled: true,
        synthetic: true,
        type: 'generic',
      })
      event.level = exports.Severity.Error
      return SyncPromise.resolve(this._buildEvent(event, hint))
    }
    // If none of previous checks were valid, then it means that
    // it's not a DOMError/DOMException
    // it's not a plain Object
    // it's not a valid ErrorEvent (one with an error property)
    // it's not an Error
    // So bail out and capture it as a simple message:
    let stringException = exception
    return this.eventFromMessage(stringException, undefined, hint).then(function (messageEvent) {
      addExceptionTypeValue(messageEvent, `${ stringException}`, undefined, {
        handled: true,
        synthetic: true,
        type: 'generic',
      })
      messageEvent.level = exports.Severity.Error
      return SyncPromise.resolve(_this._buildEvent(messageEvent, hint))
    })
  }
  /**
     * This is an internal helper function that creates an event.
     */
  WechatMiniprogramBackend.prototype._buildEvent = function (event, hint) {
    return __assign({}, event, { event_id: hint && hint.event_id })
  }
  /**
     * @inheritDoc
     */
  WechatMiniprogramBackend.prototype.eventFromMessage = function (message, level, hint) {
    if (level === void 0) { level = exports.Severity.Info }
    let event = {
      event_id: hint && hint.event_id,
      level: level,
      message: message,
    }
    if (this._options.attachStacktrace && hint && hint.syntheticException) {
      let stacktrace = _computeStackTrace(hint.syntheticException)
      let frames_1 = prepareFramesForEvent(stacktrace.stack)
      event.stacktrace = {
        frames: frames_1,
      }
    }
    return SyncPromise.resolve(event)
  }
  return WechatMiniprogramBackend
}(BaseBackend))

/**
 * The Sentry Browser SDK Client.
 *
 * @see BrowserOptions for documentation on configuration options.
 * @see SentryClient for usage documentation.
 */
let WechatMiniprogramClient = /** @class */ (function (_super) {
  __extends(WechatMiniprogramClient, _super)
  /**
     * Creates a new Browser SDK instance.
     *
     * @param options Configuration options for this SDK.
     */
  function WechatMiniprogramClient(options) {
    if (options === void 0) { options = {} }
    return _super.call(this, WechatMiniprogramBackend, options) || this
  }
  /**
     * @inheritDoc
     */
  WechatMiniprogramClient.prototype._prepareEvent = function (event, scope, hint) {
    event.platform = event.platform || 'javascript'
    event.sdk = __assign({}, event.sdk, { name: SDK_NAME,
      packages: ((event.sdk && event.sdk.packages) || []).concat([
        {
          name: 'npm:sentry-wechat-miniprogram',
          version: SDK_VERSION,
        },
      ]),
      version: SDK_VERSION })
    return _super.prototype._prepareEvent.call(this, event, scope, hint)
  }
  /**
     * Show a report dialog to the user to send feedback to a specific event.
     *
     * @param options Set individual options for the dialog
     */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  WechatMiniprogramClient.prototype.showReportDialog = function (options) {
    if (options === void 0) { options = {} }
    // not supported
  }
  return WechatMiniprogramClient
}(BaseClient))

let ignoreOnError = 0
/**
 * @hidden
 */
function shouldIgnoreOnError() {
  return ignoreOnError > 0
}
/**
 * @hidden
 */
function ignoreNextOnError() {
  // onerror should trigger before setTimeout
  ignoreOnError += 1
  setTimeout(function () {
    ignoreOnError -= 1
  })
}
/**
 * Instruments the given function and sends an event to Sentry every time the
 * function throws an exception.
 *
 * @param fn A function to wrap.
 * @returns The wrapped function.
 * @hidden
 */
function wrap(fn, options, before) {
  if (options === void 0) { options = {} }
  // tslint:disable-next-line:strict-type-predicates
  if (typeof fn !== 'function') {
    return fn
  }
  try {
    // We don't wanna wrap it twice
    if (fn.__sentry__) {
      return fn
    }
    // If this has already been wrapped in the past, return that wrapped function
    if (fn.__sentry_wrapped__) {
      return fn.__sentry_wrapped__
    }
  }
  catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    // Bail on wrapping and return the function as-is (defers to window.onerror).
    return fn
  }
  let sentryWrapped = function () {
    // tslint:disable-next-line:strict-type-predicates
    if (before && typeof before === 'function') {
      before.apply(this, arguments)
    }
    let args = Array.prototype.slice.call(arguments)
    // tslint:disable:no-unsafe-any
    try {
      // Attempt to invoke user-land function
      // NOTE: If you are a Sentry user, and you are seeing this stack frame, it
      //       means the sentry.javascript SDK caught an error invoking your application code. This
      //       is expected behavior and NOT indicative of a bug with sentry.javascript.
      let wrappedArguments = args.map(function (arg) { return wrap(arg, options) })
      if (fn.handleEvent) {
        return fn.handleEvent.apply(this, wrappedArguments)
      }
      return fn.apply(this, wrappedArguments)
      // tslint:enable:no-unsafe-any
    }
    catch (ex) {
      ignoreNextOnError()
      withScope(function (scope) {
        scope.addEventProcessor(function (event) {
          let processedEvent = __assign({}, event)
          if (options.mechanism) {
            addExceptionTypeValue(processedEvent, undefined, undefined, options.mechanism)
          }
          processedEvent.extra = __assign({}, processedEvent.extra, { arguments: normalize(args, 3) })
          return processedEvent
        })
        captureException(ex)
      })
      throw ex
    }
  }
  // Accessing some objects may throw
  // ref: https://github.com/getsentry/sentry-javascript/issues/1168
  try {
    for (let property in fn) {
      if (Object.prototype.hasOwnProperty.call(fn, property)) {
        sentryWrapped[property] = fn[property]
      }
    }
  }
  catch (_oO) { } // tslint:disable-line:no-empty
  fn.prototype = fn.prototype || {}
  sentryWrapped.prototype = fn.prototype
  Object.defineProperty(fn, '__sentry_wrapped__', {
    enumerable: false,
    value: sentryWrapped,
  })
  // Signal that this function has been wrapped/filled already
  // for both debugging and to prevent it to being wrapped/filled twice
  Object.defineProperties(sentryWrapped, {
    __sentry__: {
      enumerable: false,
      value: true,
    },
    __sentry_original__: {
      enumerable: false,
      value: fn,
    },
  })
  // Restore original function name (not all browsers allow that)
  try {
    let descriptor = Object.getOwnPropertyDescriptor(sentryWrapped, 'name')
    if (descriptor.configurable) {
      Object.defineProperty(sentryWrapped, 'name', {
        get: function () {
          return fn.name
        },
      })
    }
  }
  catch (_oO) {
    /*no-empty*/
  }
  return sentryWrapped
}
function getCurrentPage() {
  if (typeof getCurrentPages === 'function') {
    let pages = getCurrentPages()
    if (pages.length === 0) {
      return 'unknown'
    }
    return pages[pages.length - 1].route
  }
  return 'unknown'
}
function getPrevPage(delta) {
  if (typeof getCurrentPages === 'function') {
    let pages = getCurrentPages()
    if (pages.length === 0) {
      return 'unknown'
    }
    if (!delta) {
      delta = 1
    }
    if (pages[pages.length - 1 - delta]) {
      return pages[pages.length - 1 - delta].route
    }
  }
  return 'unknown'
}
function globalErrorFingerprint(msg) {
  try {
    if (isError(msg)) {
      msg = msg.message
    }
    return msg.split('\n').slice(0, 2)
  }
  catch (e) {
    return null
  }
}
function fill$1(source, name, replacement) {
  let _a
  try {
    if (!(name in source) || (source[name]).__sentry__) {
      return
    }
    let original = source[name]
    let wrapped = replacement(original)
    wrapped.__sentry__ = true
    wrapped.__sentry_original__ = original
    wrapped.__sentry_wrapped__ = wrapped
    if (Object.defineProperties && Object.getOwnPropertyDescriptor) {
      let desp = Object.getOwnPropertyDescriptor(source, name)
      if (!desp || !desp.configurable) {
        throw new Error('unable to config')
      }
      Object.defineProperties(source, (_a = {},
      _a[name] = {
        value: wrapped,
      },
      _a))
    }
    else {
      source[name] = wrapped
    }
  }
  catch (e) {
    logger.warn(`fail to reset property ${ name}`)
  }
}

/** Global handlers */
let GlobalHandlers = /** @class */ (function () {
  /** JSDoc */
  function GlobalHandlers(options) {
    /**
         * @inheritDoc
         */
    this.name = GlobalHandlers.id
    this._options = __assign({ onerror: true, onpagenotfound: true }, options)
  }
  /**
     * @inheritDoc
     */
  GlobalHandlers.prototype.setupOnce = function () {
    Error.stackTraceLimit = 50
    _subscribe(function (stack, _, error) {
      // TODO: use stack.context to get a valuable information from TraceKit, eg.
      // [
      //   0: "  })"
      //   1: ""
      //   2: "  function foo () {"
      //   3: "    Sentry.captureException('some error')"
      //   4: "    Sentry.captureMessage('some message')"
      //   5: "    throw 'foo'"
      //   6: "  }"
      //   7: ""
      //   8: "  function bar () {"
      //   9: "    foo();"
      //   10: "  }"
      // ]
      if (shouldIgnoreOnError()) {
        return
      }
      let self = getCurrentHub().getIntegration(GlobalHandlers)
      if (self) {
        getCurrentHub().captureEvent(self._eventFromGlobalHandler(stack), {
          data: { stack: stack },
          originalException: error,
        })
      }
    })
    if (this._options.onerror) {
      logger.log('Global Handler attached: onerror')
      this._installGlobalErrorHandler()
    }
    if (this._options.onpagenotfound) {
      logger.log('Global Handler attached: onpagenotfound')
      this._installGlobalPageNotFoundHandler()
    }
  }
  GlobalHandlers.prototype._installGlobalErrorHandler = function () {
    wx.onError(function (msg) {
      withScope(function (scope) {
        let fingerprint = globalErrorFingerprint(msg)
        let error
        if (fingerprint) {
          scope.setFingerprint(fingerprint)
        }
        if (!isError(msg)) {
          if (fingerprint) {
            let errorType = fingerprint[0] || 'UnknownAppError'
            let errorMessage = fingerprint[1] || errorType
            error = new Error(errorMessage)
            error.name = errorType
            error.stack = msg
          }
          else {
            error = new Error('UnknownAppError')
            error.stack = msg
          }
        }
        else {
          error = msg
        }
        captureException(error)
      })
    })
  }
  GlobalHandlers.prototype._installGlobalPageNotFoundHandler = function () {
    wx.onPageNotFound(function (res) {
      captureEvent({
        message: 'page not found',
        extra: res,
      })
    })
  }
  /**
     * This function creates an Event from an TraceKitStackTrace.
     *
     * @param stacktrace TraceKitStackTrace to be converted to an Event.
     */
  GlobalHandlers.prototype._eventFromGlobalHandler = function (stacktrace) {
    if (!isString(stacktrace.message) && stacktrace.mechanism !== 'onunhandledrejection') {
      // There are cases where stacktrace.message is an Event object
      // https://github.com/getsentry/sentry-javascript/issues/1949
      // In this specific case we try to extract stacktrace.message.error.message
      let message = stacktrace.message
      stacktrace.message
                = message.error && isString(message.error.message) ? message.error.message : 'No error message'
    }
    let event = eventFromStacktrace(stacktrace)
    let data = {
      mode: stacktrace.mode,
    }
    if (stacktrace.message) {
      data.message = stacktrace.message
    }
    if (stacktrace.name) {
      data.name = stacktrace.name
    }
    let client = getCurrentHub().getClient()
    let maxValueLength = (client && client.getOptions().maxValueLength) || 250
    let fallbackValue = stacktrace.original
      ? truncate(JSON.stringify(normalize(stacktrace.original)), maxValueLength)
      : ''
    let fallbackType = stacktrace.mechanism === 'onunhandledrejection' ? 'UnhandledRejection' : 'Error'
    // This makes sure we have type/value in every exception
    addExceptionTypeValue(event, fallbackValue, fallbackType, {
      data: data,
      handled: false,
      type: stacktrace.mechanism,
    })
    return event
  }
  /**
     * @inheritDoc
     */
  GlobalHandlers.id = 'GlobalHandlers'
  return GlobalHandlers
}())

/** Wrap timer functions and event targets to catch errors and provide better meta data */
let TryCatch = /** @class */ (function () {
  function TryCatch() {
    /** JSDoc */
    this._ignoreOnError = 0
    /**
         * @inheritDoc
         */
    this.name = TryCatch.id
  }
  /** JSDoc */
  TryCatch.prototype._wrapTimeFunction = function (original) {
    return function () {
      let args = []
      for (let _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i]
      }
      let originalCallback = args[0]
      args[0] = wrap(originalCallback, {
        mechanism: {
          data: { function: getFunctionName(original) },
          handled: true,
          type: 'instrument',
        },
      })
      return original.apply(this, args)
    }
  }
  /** JSDoc */
  TryCatch.prototype._wrapRAF = function (original) {
    return function (callback) {
      return original(wrap(callback, {
        mechanism: {
          data: {
            function: 'requestAnimationFrame',
            handler: getFunctionName(original),
          },
          handled: true,
          type: 'instrument',
        },
      }))
    }
  }
  /** JSDoc */
  TryCatch.prototype._wrapEventTarget = function (target) {
    let global = getGlobalObject()
    let proto = global[target] && global[target].prototype
    if (!proto || !proto.hasOwnProperty || !proto.hasOwnProperty('addEventListener')) {
      return
    }
    fill(proto, 'addEventListener', function (original) {
      return function (eventName, fn, options) {
        try {
          // tslint:disable-next-line:no-unbound-method strict-type-predicates
          if (typeof fn.handleEvent === 'function') {
            fn.handleEvent = wrap(fn.handleEvent.bind(fn), {
              mechanism: {
                data: {
                  function: 'handleEvent',
                  handler: getFunctionName(fn),
                  target: target,
                },
                handled: true,
                type: 'instrument',
              },
            })
          }
        }
        catch (err) {
          // can sometimes get 'Permission denied to access property "handle Event'
        }
        return original.call(this, eventName, wrap(fn, {
          mechanism: {
            data: {
              function: 'addEventListener',
              handler: getFunctionName(fn),
              target: target,
            },
            handled: true,
            type: 'instrument',
          },
        }), options)
      }
    })
    fill(proto, 'removeEventListener', function (original) {
      return function (eventName, fn, options) {
        let callback = fn
        try {
          callback = callback && (callback.__sentry_wrapped__ || callback)
        }
        catch (e) {
          // ignore, accessing __sentry_wrapped__ will throw in some Selenium environments
        }
        return original.call(this, eventName, callback, options)
      }
    })
  }
  /**
     * Wrap timer functions and event targets to catch errors
     * and provide better metadata.
     */
  TryCatch.prototype.setupOnce = function () {
    this._ignoreOnError = this._ignoreOnError
    let global = getGlobalObject()
    fill(global, 'setTimeout', this._wrapTimeFunction.bind(this))
    fill(global, 'setInterval', this._wrapTimeFunction.bind(this))
    fill(global, 'requestAnimationFrame', this._wrapRAF.bind(this))
    ;[
      'EventTarget',
      'Window',
      'Node',
      'ApplicationCache',
      'AudioTrackList',
      'ChannelMergerNode',
      'CryptoOperation',
      'EventSource',
      'FileReader',
      'HTMLUnknownElement',
      'IDBDatabase',
      'IDBRequest',
      'IDBTransaction',
      'KeyOperation',
      'MediaController',
      'MessagePort',
      'ModalWindow',
      'Notification',
      'SVGElementInstance',
      'Screen',
      'TextTrack',
      'TextTrackCue',
      'TextTrackList',
      'WebSocket',
      'WebSocketWorker',
      'Worker',
      'XMLHttpRequest',
      'XMLHttpRequestEventTarget',
      'XMLHttpRequestUpload',
    ].forEach(this._wrapEventTarget.bind(this))
  }
  /**
     * @inheritDoc
     */
  TryCatch.id = 'TryCatch'
  return TryCatch
}())
/**
 * Safely extract function name from itself
 */
function getFunctionName(fn) {
  try {
    return (fn && fn.name) || '<anonymous>'
  }
  catch (e) {
    // Just accessing custom props in some Selenium environments
    // can cause a "Permission denied" exception (see raven-js#495).
    return '<anonymous>'
  }
}

let global$2 = getGlobalObject()
/** Default Breadcrumbs instrumentations */
let Breadcrumbs = /** @class */ (function () {
  /**
     * @inheritDoc
     */
  function Breadcrumbs(options) {
    /**
         * @inheritDoc
         */
    this.name = Breadcrumbs.id
    this._options = __assign({ console: true, request: true, navigation: true, api: true, lifecycle: true }, options)
  }
  /** JSDoc */
  Breadcrumbs.prototype._instrumentConsole = function () {
    if (!('console' in global$2)) {
      return
    }
    ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (level) {
      if (!(level in global$2.console)) {
        return
      }
      fill$1(global$2.console, level, function (originalConsoleLevel) {
        return function () {
          let args = []
          for (let _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i]
          }
          let breadcrumbData = {
            category: 'console',
            data: {
              extra: {
                arguments: normalize(args, 3),
              },
              logger: 'console',
            },
            level: exports.Severity.fromString(level),
            message: safeJoin(args, ' '),
          }
          if (level === 'assert') {
            if (args[0] === false) {
              breadcrumbData.message = `Assertion failed: ${ safeJoin(args.slice(1), ' ') || 'console.assert'}`
              breadcrumbData.data.extra.arguments = normalize(args.slice(1), 3)
            }
          }
          Breadcrumbs.addBreadcrumb(breadcrumbData, {
            input: args,
            level: level,
          })
          // this fails for some browsers. :(
          if (originalConsoleLevel) {
            Function.prototype.apply.call(originalConsoleLevel, global$2.console, args)
          }
        }
      })
    })
  }
  /** JSDoc */
  Breadcrumbs.prototype._instrumentRequest = function () {
    if (!wx.request) {
      return
    }
    fill$1(wx, 'request', function (originalRequest) {
      let wrappedRequest = function (requestOptions) {
        let method = requestOptions.method ? requestOptions.method.toUpperCase() : 'GET'
        let url = requestOptions.url
        let client = getCurrentHub().getClient()
        let dsn = client && client.getDsn()
        if (dsn) {
          let filterUrl = new API(dsn).getStoreEndpoint()
          if (filterUrl && url.includes(filterUrl)) {
            if (method === 'POST' && requestOptions.data) {
              addSentryBreadcrumb(requestOptions.data)
            }
            return originalRequest.call(wx, requestOptions)
          }
        }
        let fetchData = {
          method: method,
          url: url,
        }
        let originSuccess = requestOptions.success
        let originFail = requestOptions.fail
        requestOptions.success = function (res) {
          if (originSuccess) {
            originSuccess(res)
          }
          fetchData.statusCode = res.statusCode
          Breadcrumbs.addBreadcrumb({
            category: 'request',
            data: fetchData,
            type: 'http',
          })
        }
        requestOptions.fail = function (error) {
          if (originFail) {
            originFail(error)
          }
          Breadcrumbs.addBreadcrumb({
            category: 'request',
            data: fetchData,
            level: exports.Severity.Error,
            type: 'http',
          })
        }
        return originalRequest.call(wx, requestOptions)
      }
      return wrappedRequest
    })
  }
  /** JSDoc */
  Breadcrumbs.prototype._instrumentNavigation = function () {
    function handleNavigate(originalNavigate) {
      return function (options) {
        if (options === void 0) { options = {} }
        let to = options.url
        if (!to && options.delta) {
          to = getPrevPage(options.delta)
        }
        if (to) {
          let from = getCurrentPage()
          Breadcrumbs.addBreadcrumb({
            category: 'navigation',
            data: { from: from, to: to },
          })
        }
        return originalNavigate.call(wx, options)
      }
    }
    ['navigateBack', 'navigateTo', 'redirectTo', 'reLaunch', 'switchTab'].forEach(function (api) {
      if (!wx[api]) {
        return
      }
      fill$1(wx, api, handleNavigate)
    })
  }
  /** JSDoc */
  Breadcrumbs.prototype._instrumentApi = function () {
    Object.keys(wx)
      .filter(function (api) {
        return typeof wx[api] === 'function'
      })
      .forEach(function (api) {
        fill$1(wx, api, function (original) {
          return function () {
            let args = []
            for (let _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i]
            }
            if (!(args[0] || {}).__sentry_ignore__) {
              Breadcrumbs.addBreadcrumb({
                category: 'api',
                data: {
                  name: api,
                  args: args,
                },
              })
            }
            return original.apply(wx, args)
          }
        })
      })
  }
  /** JSDoc */
  Breadcrumbs.prototype._instrumentLifecycle = function () {
    ['onAppShow', 'onAppHide'].forEach(function (api) {
      if (!wx[api]) {
        return
      }
      wx[api](function (res) {
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
  Breadcrumbs.addBreadcrumb = function (breadcrumb, hint) {
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
  Breadcrumbs.prototype.setupOnce = function () {
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
  /**
     * @inheritDoc
     */
  Breadcrumbs.id = 'Breadcrumbs'
  return Breadcrumbs
}())
/** JSDoc */
function addSentryBreadcrumb(serializedData) {
  // There's always something that can go wrong with deserialization...
  try {
    let event_1 = isString(serializedData) ? JSON.parse(serializedData) : serializedData
    Breadcrumbs.addBreadcrumb({
      category: 'sentry',
      event_id: event_1.event_id,
      level: event_1.level || exports.Severity.fromString('error'),
      message: getEventDescription(event_1),
    }, {
      event: event_1,
    })
  }
  catch (_oO) {
    logger.error('Error while adding sentry type breadcrumb')
  }
}

let DEFAULT_KEY = 'cause'
let DEFAULT_LIMIT = 5
/** Adds SDK info to an event. */
let LinkedErrors = /** @class */ (function () {
  /**
     * @inheritDoc
     */
  function LinkedErrors(options) {
    if (options === void 0) { options = {} }
    /**
         * @inheritDoc
         */
    this.name = LinkedErrors.id
    this._key = options.key || DEFAULT_KEY
    this._limit = options.limit || DEFAULT_LIMIT
  }
  /**
     * @inheritDoc
     */
  LinkedErrors.prototype.setupOnce = function () {
    addGlobalEventProcessor(function (event, hint) {
      let self = getCurrentHub().getIntegration(LinkedErrors)
      if (self) {
        return self._handler(event, hint)
      }
      return event
    })
  }
  /**
     * @inheritDoc
     */
  LinkedErrors.prototype._handler = function (event, hint) {
    if (!event.exception || !event.exception.values || !hint || !(hint.originalException instanceof Error)) {
      return event
    }
    let linkedErrors = this._walkErrorTree(hint.originalException, this._key)
    event.exception.values = linkedErrors.concat(event.exception.values)
    return event
  }
  /**
     * @inheritDoc
     */
  LinkedErrors.prototype._walkErrorTree = function (error, key, stack) {
    if (stack === void 0) { stack = [] }
    if (!(error[key] instanceof Error) || stack.length + 1 >= this._limit) {
      return stack
    }
    let stacktrace = _computeStackTrace(error[key])
    let exception = exceptionFromStacktrace(stacktrace)
    return this._walkErrorTree(error[key], key, [exception].concat(stack))
  }
  /**
     * @inheritDoc
     */
  LinkedErrors.id = 'LinkedErrors'
  return LinkedErrors
}())

let BrowserIntegrations = /*#__PURE__*/Object.freeze({
  GlobalHandlers: GlobalHandlers,
  TryCatch: TryCatch,
  Breadcrumbs: Breadcrumbs,
  LinkedErrors: LinkedErrors,
})

let defaultIntegrations = [
  new InboundFilters(),
  new FunctionToString(),
  new TryCatch(),
  new Breadcrumbs(),
  new GlobalHandlers(),
  new LinkedErrors(),
]
/**
 * The Sentry Browser SDK Client.
 *
 * To use this SDK, call the {@link init} function as early as possible when
 * loading the web page. To set context information or send manual events, use
 * the provided methods.
 *
 * @example
 *
 * ```
 *
 * import { init } from '@sentry/browser';
 *
 * init({
 *   dsn: '__DSN__',
 *   // ...
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { configureScope } from '@sentry/browser';
 * configureScope((scope: Scope) => {
 *   scope.setExtra({ battery: 0.7 });
 *   scope.setTag({ user_mode: 'admin' });
 *   scope.setUser({ id: '4711' });
 * });
 * ```
 *
 * @example
 * ```
 *
 * import { addBreadcrumb } from '@sentry/browser';
 * addBreadcrumb({
 *   message: 'My Breadcrumb',
 *   // ...
 * });
 * ```
 *
 * @example
 *
 * ```
 *
 * import * as Sentry from '@sentry/browser';
 * Sentry.captureMessage('Hello, world!');
 * Sentry.captureException(new Error('Good bye'));
 * Sentry.captureEvent({
 *   message: 'Manual',
 *   stacktrace: [
 *     // ...
 *   ],
 * });
 * ```
 *
 * @see {@link BrowserOptions} for documentation on configuration options.
 */
function init(options) {
  if (options === void 0) { options = {} }
  if (options.defaultIntegrations === undefined) {
    options.defaultIntegrations = defaultIntegrations
  }
  initAndBind(WechatMiniprogramClient, options)
  // 小程序独有的信息
  configureScope(function (scope) {
    if (wx.getSystemInfo) {
      wx.getSystemInfo({
        __sentry_ignore__: true,
        success: function (res) {
          delete res.errMsg
          Object.keys(res).forEach(function (key) {
            scope.setTag(key, res[key])
          })
        },
      })
    }
    if (wx.getLaunchOptionsSync) {
      let launchOptions = wx.getLaunchOptionsSync({
        __sentry_ignore__: true,
      })
      if (launchOptions) {
        addBreadcrumb({
          category: 'app-life-cycle',
          data: {
            name: 'onAppLaunch',
            args: launchOptions,
          },
        })
        if (launchOptions.scene) {
          scope.setTag('scene', String(launchOptions.scene))
        }
      }
    }
    if (wx.getAccountInfoSync) {
      let accountInfo = wx.getAccountInfoSync({
        __sentry_ignore__: true,
      })
      if (accountInfo && accountInfo.miniProgram) {
        scope.setTag('appId', accountInfo.miniProgram.appId)
      }
    }
  })
}
/**
 * Present the user with a report dialog.
 *
 * @param options Everything is optional, we try to fetch all info need from the global scope.
 */
function showReportDialog(options) {
  if (options === void 0) { options = {} }
  if (!options.eventId) {
    options.eventId = getCurrentHub().lastEventId()
  }
  let client = getCurrentHub().getClient()
  if (client) {
    client.showReportDialog(options)
  }
}
/**
 * This is the getter for lastEventId.
 *
 * @returns The last event id of a captured event.
 */
function lastEventId() {
  return getCurrentHub().lastEventId()
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function forceLoad() {
  // Noop
}
/**
 * This function is here to be API compatible with the loader.
 * @hidden
 */
function onLoad(callback) {
  callback()
}
/**
 * A promise that resolves when all current events have been sent.
 * If you provide a timeout and the queue takes longer to drain the promise returns false.
 *
 * @param timeout Maximum time in ms the client should wait.
 */
function flush(timeout) {
  let client = getCurrentHub().getClient()
  if (client) {
    return client.flush(timeout)
  }
  return Promise.reject(false)
}
/**
 * A promise that resolves when all current events have been sent.
 * If you provide a timeout and the queue takes longer to drain the promise returns false.
 *
 * @param timeout Maximum time in ms the client should wait.
 */
function close(timeout) {
  let client = getCurrentHub().getClient()
  if (client) {
    return client.close(timeout)
  }
  return Promise.reject(false)
}
/**
 * Wrap code within a try/catch block so the SDK is able to capture errors.
 *
 * @param fn A function to wrap.
 */
function wrap$1(fn) {
  // tslint:disable-next-line: no-unsafe-any
  wrap(fn)()
}

let windowIntegrations = {}
// This block is needed to add compatibility with the integrations packages when used with a CDN
// tslint:disable: no-unsafe-any
let _window = getGlobalObject()
if (_window.Sentry && _window.Sentry.Integrations) {
  windowIntegrations = _window.Sentry.Integrations
}
// tslint:enable: no-unsafe-any
let INTEGRATIONS = __assign({}, windowIntegrations, CoreIntegrations, BrowserIntegrations)

exports.BrowserClient = WechatMiniprogramClient
exports.Hub = Hub
exports.Integrations = INTEGRATIONS
exports.SDK_NAME = SDK_NAME
exports.SDK_VERSION = SDK_VERSION
exports.Scope = Scope
exports.Span = Span
exports.Transports = index
exports.addBreadcrumb = addBreadcrumb
exports.addGlobalEventProcessor = addGlobalEventProcessor
exports.captureEvent = captureEvent
exports.captureException = captureException
exports.captureMessage = captureMessage
exports.close = close
exports.configureScope = configureScope
exports.defaultIntegrations = defaultIntegrations
exports.flush = flush
exports.forceLoad = forceLoad
exports.getCurrentHub = getCurrentHub
exports.getHubFromCarrier = getHubFromCarrier
exports.init = init
exports.lastEventId = lastEventId
exports.onLoad = onLoad
exports.setContext = setContext
exports.setExtra = setExtra
exports.setExtras = setExtras
exports.setTag = setTag
exports.setTags = setTags
exports.setUser = setUser
exports.showReportDialog = showReportDialog
exports.withScope = withScope
exports.wrap = wrap$1
