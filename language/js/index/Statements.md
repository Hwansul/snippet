## Statements


| Value Properties | Function properties | Fundamental Objects | Error objects |
| ---- | ---- | ---- | ---- |
| `globalThis` | `eval()` | `Object` | `Error` |
| `Infinity` | `isFinite()` | `Function` | `AggregateError` |
| `NaN` | `isNaN()` | `Boolean` | `EvalError` |
| `undefined` | `parseFloat()` | `Symbol` | `RangeError` |
|  | `parseInt()` |  | `ReferenceError` |
|  | `decodeURI()` |  | `SyntaxError` |
|  | `decodeURIComponent()` |  | `TypeError` |
|  | `encodeURI()` |  | `URIError` |
|  | `encodeURIComponent()` |  | `InternalError` |

| Numbers and dates | Text processing | Indexed collections | Keyed collections |
| ---- | ---- | ---- | ---- |
| `Number` | `String` | `Array` | `Map` |
| `BigInt` | `RegExp` | `Int8Array` | `Set` |
| `Math` |  | `Uint8Array` | `WeakMap` |
| `Date` |  | `Uint8ClampedArray` | `WeakSet` |
|  |  | `Int16Array` |  |
|  |  | `Uint16Array` |  |
|  |  | `Int32Array` |  |
|  |  | `Uint32Array` |  |
|  |  | `BigInt64Array` |  |
|  |  | `BigUint64Array` |  |
|  |  | `Float32Array` |  |
|  |  | `Float64Array` |  |

| Structured data | Managing memory | Control abstraction objects | Reflection | Internationalization |
| ---- | ---- | ---- | ---- | ---- |
| `ArrayBuffer` | `WeakRef` | `Iterator` | `Reflect` | `Intl` |
| `SharedArrayBuffer` | `FinalizationRegistry` | `AsyncIterator` | `Proxy` | `Intl.Collator` |
| `DataView` |  | `Promise` |  | `Intl.DateTimeFormat` |
| `Atomics` |  | `GeneratorFunction` |  | `Intl.DisplayNames` |
| `JSON` |  | `AsyncGeneratorFunction` |  | `Intl.DurationFormat` |
|  |  | `Generator` |  | `Intl.ListFormat` |
|  |  | `AsyncGenerator` |  | `Intl.Locale` |
|  |  | `AsyncFunction` |  | `Intl.NumberFormat` |
|  |  |  |  | `Intl.PluralRules` |
|  |  |  |  | `Intl.RelativeTimeFormat` |
|  |  |  |  | `Intl.Segmenter` |
