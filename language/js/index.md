JavaScript reference
====================

 
The JavaScript reference serves as a repository of facts about the
JavaScript language. The entire language is described here in detail. As
you write JavaScript code, you\'ll refer to these pages often (thus the
title \"JavaScript reference\").

The JavaScript language is intended to be used within some larger
environment, be it a browser, server-side scripts, or similar. For the
most part, this reference attempts to be environment-agnostic and does
not target a web browser environment.

If you are new to JavaScript, start with the
[guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).
Once you have a firm grasp of the fundamentals, you can use the
reference to get more details on individual objects and language
constructs.


 
Built-ins
---------

 
[JavaScript standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects), along with their methods and properties.

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

### Value properties 

 
-   [`globalThis`](global_objects/globalthis)
-   [`Infinity`](global_objects/infinity)
-   [`NaN`](global_objects/nan)
-   [`undefined`](global_objects/undefined)



 
### Function properties 

 
-   [`eval()`](global_objects/eval)
-   [`isFinite()`](global_objects/isfinite)
-   [`isNaN()`](global_objects/isnan)
-   [`parseFloat()`](global_objects/parsefloat)
-   [`parseInt()`](global_objects/parseint)
-   [`decodeURI()`](global_objects/decodeuri)
-   [`decodeURIComponent()`](global_objects/decodeuricomponent)
-   [`encodeURI()`](global_objects/encodeuri)
-   [`encodeURIComponent()`](global_objects/encodeuricomponent)
-   [`escape()`](global_objects/escape) [Deprecated]
-   [`unescape()`](global_objects/unescape) [Deprecated]



 
### Fundamental objects 

 
-   [`Object`](global_objects/object)
-   [`Function`](global_objects/function)
-   [`Boolean`](global_objects/boolean)
-   [`Symbol`](global_objects/symbol)



 
### Error objects 

 
-   [`Error`](global_objects/error)
-   [`AggregateError`](global_objects/aggregateerror)
-   [`EvalError`](global_objects/evalerror)
-   [`RangeError`](global_objects/rangeerror)
-   [`ReferenceError`](global_objects/referenceerror)
-   [`SyntaxError`](global_objects/syntaxerror)
-   [`TypeError`](global_objects/typeerror)
-   [`URIError`](global_objects/urierror)
-   [`InternalError`](global_objects/internalerror) [Non-standard]



 
### Numbers and dates 

 
-   [`Number`](global_objects/number)
-   [`BigInt`](global_objects/bigint)
-   [`Math`](global_objects/math)
-   [`Date`](global_objects/date)



 
### Text processing 

 
-   [`String`](global_objects/string)
-   [`RegExp`](global_objects/regexp)



 
### Indexed collections 

 
-   [`Array`](global_objects/array)
-   [`Int8Array`](global_objects/int8array)
-   [`Uint8Array`](global_objects/uint8array)
-   [`Uint8ClampedArray`](global_objects/uint8clampedarray)
-   [`Int16Array`](global_objects/int16array)
-   [`Uint16Array`](global_objects/uint16array)
-   [`Int32Array`](global_objects/int32array)
-   [`Uint32Array`](global_objects/uint32array)
-   [`BigInt64Array`](global_objects/bigint64array)
-   [`BigUint64Array`](global_objects/biguint64array)
-   [`Float32Array`](global_objects/float32array)
-   [`Float64Array`](global_objects/float64array)



 
### Keyed collections 

 
-   [`Map`](global_objects/map)
-   [`Set`](global_objects/set)
-   [`WeakMap`](global_objects/weakmap)
-   [`WeakSet`](global_objects/weakset)



 
### Structured data 

 
-   [`ArrayBuffer`](global_objects/arraybuffer)
-   [`SharedArrayBuffer`](global_objects/sharedarraybuffer)
-   [`DataView`](global_objects/dataview)
-   [`Atomics`](global_objects/atomics)
-   [`JSON`](global_objects/json)



 
### Managing memory 

 
-   [`WeakRef`](global_objects/weakref)
-   [`FinalizationRegistry`](global_objects/finalizationregistry)



 
### Control abstraction objects 

 
-   [`Iterator`](global_objects/iterator)
-   [`AsyncIterator`](global_objects/asynciterator)
-   [`Promise`](global_objects/promise)
-   [`GeneratorFunction`](global_objects/generatorfunction)
-   [`AsyncGeneratorFunction`](global_objects/asyncgeneratorfunction)
-   [`Generator`](global_objects/generator)
-   [`AsyncGenerator`](global_objects/asyncgenerator)
-   [`AsyncFunction`](global_objects/asyncfunction)



 
### Reflection

 
-   [`Reflect`](global_objects/reflect)
-   [`Proxy`](global_objects/proxy)



 
### Internationalization

 
-   [`Intl`](global_objects/intl)
-   [`Intl.Collator`](global_objects/intl/collator)
-   [`Intl.DateTimeFormat`](global_objects/intl/datetimeformat)
-   [`Intl.DisplayNames`](global_objects/intl/displaynames)
-   [`Intl.DurationFormat`](global_objects/intl/durationformat)
-   [`Intl.ListFormat`](global_objects/intl/listformat)
-   [`Intl.Locale`](global_objects/intl/locale)
-   [`Intl.NumberFormat`](global_objects/intl/numberformat)
-   [`Intl.PluralRules`](global_objects/intl/pluralrules)
-   [`Intl.RelativeTimeFormat`](global_objects/intl/relativetimeformat)
-   [`Intl.Segmenter`](global_objects/intl/segmenter)



 
Statements
----------
 
[JavaScript statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

| Control flow | Declaring variables | Functions and classes | Iterations | Others |
| ---- | ---- | ---- | ---- | ---- |
| `return` | `var` | `function` | `do...while` | Empty |
| `break` | `let` | `function*` | `for` | Block |
| `continue` | `const` | `async function` | `for...in` | Expression statement |
| `throw` |  | `async function*` | `for...of` | `debugger` |
| `if...else` |  | `class` | `for await...of` | `export` |
| `switch` |  |  | `while` | `import` |
| `try...catch` |  |  |  | label |
|  |  |  |  | `with` (deprecated) |


 
### Control flow 

 
-   [`return`](statements/return)
-   [`break`](statements/break)
-   [`continue`](statements/continue)
-   [`throw`](statements/throw)
-   [`if...else`](statements/if...else)
-   [`switch`](statements/switch)
-   [`try...catch`](statements/try...catch)



 
### Declaring variables 

 
-   [`var`](statements/var)
-   [`let`](statements/let)
-   [`const`](statements/const)



 
### Functions and classes 

 
-   [`function`](statements/function)
-   [`function*`](statements/function*)
-   [`async function`](statements/async_function)
-   [`async function*`](statements/async_function*)
-   [`class`](statements/class)



 
### Iterations

 
-   [`do...while`](statements/do...while)
-   [`for`](statements/for)
-   [`for...in`](statements/for...in)
-   [`for...of`](statements/for...of)
-   [`for await...of`](statements/for-await...of)
-   [`while`](statements/while)



 
### Others

 
-   [Empty](statements/empty)
-   [Block](statements/block)
-   [Expression statement](statements/expression_statement)
-   [`debugger`](statements/debugger)
-   [`export`](statements/export)
-   [`import`](statements/import)
-   [label](statements/label)
-   [`with`](statements/with) [Deprecated]



 
Expressions and operators 
-------------------------

 
[JavaScript expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators).


| Primary expressions | Left-hand-side expressions | Increment and decrement | Unary operators | Arithmetic operators |
| ---- | ---- | ---- | ---- | ---- |
| `this` | Property accessors | `A++` | `delete` | `**` |
| Literals | `?.` | `A--` | `void` | `*` |
| `[]` | `new` | `++A` | `typeof` | `/` |
| `{}` | `new.target` | `--A` | `+` | `%` |
| `function` | `import.meta` |  | `-` | `+` |
| `class` | `super` |  | `~` | `-` |
| `function*` | `import()` |  | `!` |  |
| `async function` |  |  | `await` |  |
| `async function*` |  |  |  |  |
| `/ab+c/i` |  |  |  |  |
| `` `string` `` |  |  |  |  |
| `( )` |  |  |  |  |

| Relational operators | Equality operators | Bitwise shift operators | Binary bitwise operators | Binary logical operators |
| ---- | ---- | ---- | ---- | ---- |
| `<` | `==` | `<<` | `&` | `&&` |
| `>` | `!=` | `>>` | `\|` | `\|\|` |
| `<=` | `===` | `>>>` | `^` | `??` |
| `>=` | `!==` |  |  |  |
| `instanceof` |  |  |  |  |
| `in` |  |  |  |  |

| Conditional (ternary) operator | Assignment operators | Yield operators | Spread syntax | Comma Operator |
| ---- | ---- | ---- | ---- | ---- |
| `(condition ? ifTrue : ifFalse)` | `=` | `yield` | `...obj` | `,` |
|  | `*=` | `yield*` |  |  |
|  | `/=` |  |  |  |
|  | `%=` |  |  |  |
|  | `+=` |  |  |  |
|  | `-=` |  |  |  |
|  | `<<=` |  |  |  |
|  | `>>=` |  |  |  |
|  | `>>>=` |  |  |  |
|  | `&=` |  |  |  |
|  | `^=` |  |  |  |
|  | `\|=` |  |  |  |
|  | `**=` |  |  |  |
|  | `&&=` |  |  |  |
|  | `\|\|=` |  |  |  |
|  | `??=` |  |  |  |
|  | `[a, b] = arr`,  `{ a, b } = obj` |  |  |  |
### Primary expressions 

 
-   [`this`](operators/this)
-   [Literals](lexical_grammar#literals)
-   [`[]`](global_objects/array)
-   [`{}`](operators/object_initializer)
-   [`function`](operators/function)
-   [`class`](operators/class)
-   [`function*`](operators/function*)
-   [`async function`](operators/async_function)
-   [`async function*`](operators/async_function*)
-   [`/ab+c/i`](global_objects/regexp)
-   [`` `string` ``](template_literals)
-   [`( )`](operators/grouping)



 
### Left-hand-side expressions 

 
-   [Property accessors](operators/property_accessors)
-   [`?.`](operators/optional_chaining)
-   [`new`](operators/new)
-   [`new.target`](operators/new.target)
-   [`import.meta`](operators/import.meta)
-   [`super`](operators/super)
-   [`import()`](operators/import)



 
### Increment and decrement 

 
-   [`A++`](operators/increment)
-   [`A--`](operators/decrement)
-   [`++A`](operators/increment)
-   [`--A`](operators/decrement)



 
### Unary operators 

 
-   [`delete`](operators/delete)
-   [`void`](operators/void)
-   [`typeof`](operators/typeof)
-   [`+`](operators/unary_plus)
-   [`-`](operators/unary_negation)
-   [`~`](operators/bitwise_not)
-   [`!`](operators/logical_not)
-   [`await`](operators/await)



 
### Arithmetic operators 

 
-   [`**`](operators/exponentiation)
-   [`*`](operators/multiplication)
-   [`/`](operators/division)
-   [`%`](operators/remainder)
-   [`+`](operators/addition) (Plus)
-   [`-`](operators/subtraction)



 
### Relational operators 

 
-   [`<`](operators/less_than) (Less than)
-   [`>`](operators/greater_than) (Greater than)
-   [`<=`](operators/less_than_or_equal)
-   [`>=`](operators/greater_than_or_equal)
-   [`instanceof`](operators/instanceof)
-   [`in`](operators/in)



 
### Equality operators 

 
-   [`==`](operators/equality)
-   [`!=`](operators/inequality)
-   [`===`](operators/strict_equality)
-   [`!==`](operators/strict_inequality)



 
### Bitwise shift operators 

 
-   [`<<`](operators/left_shift)
-   [`>>`](operators/right_shift)
-   [`>>>`](operators/unsigned_right_shift)



 
### Binary bitwise operators 

 
-   [`&`](operators/bitwise_and)
-   [`|`](operators/bitwise_or)
-   [`^`](operators/bitwise_xor)



 
### Binary logical operators 

 
-   [`&&`](operators/logical_and)
-   [`||`](operators/logical_or)
-   [`??`](operators/nullish_coalescing)



 
### Conditional (ternary) operator 

 
-   [`(condition ? ifTrue : ifFalse)`](operators/conditional_operator)



 
### Assignment operators 

 
-   [`=`](operators/assignment)
-   [`*=`](operators/multiplication_assignment)
-   [`/=`](operators/division_assignment)
-   [`%=`](operators/remainder_assignment)
-   [`+=`](operators/addition_assignment)
-   [`-=`](operators/subtraction_assignment)
-   [`<<=`](operators/left_shift_assignment)
-   [`>>=`](operators/right_shift_assignment)
-   [`>>>=`](operators/unsigned_right_shift_assignment)
-   [`&=`](operators/bitwise_and_assignment)
-   [`^=`](operators/bitwise_xor_assignment)
-   [`|=`](operators/bitwise_or_assignment)
-   [`**=`](operators/exponentiation_assignment)
-   [`&&=`](operators/logical_and_assignment)
-   [`||=`](operators/logical_or_assignment)
-   [`??=`](operators/nullish_coalescing_assignment)
-   [`[a, b] = arr`,  `{ a, b } = obj`](operators/destructuring_assignment)



 
### Yield operators 

 
-   [`yield`](operators/yield)
-   [`yield*`](operators/yield*)



 
### Spread syntax 

 
-   [`...obj`](operators/spread_syntax)



 
### Comma operator 

 
-   [`,`](operators/comma_operator)



 
Functions
---------

 
[JavaScript functions.](functions)

-   [Arrow Functions](functions/arrow_functions)
-   [Default parameters](functions/default_parameters)
-   [Rest parameters](functions/rest_parameters)
-   [`arguments`](functions/arguments)
-   [Method definitions](functions/method_definitions)
-   [getter](functions/get)
-   [setter](functions/set)

- `() => expression`
- `function fnName(param1 = defaultValue1, /* …, */ paramN = defaultValueN) {}`
- `function f(a, b, ...theArgs) {}`
- `arguments[n]; // nth argument` 
- `({ property(parameters) {}, })` 
- `({ [expression](parameters) {}, })` 
- `{ get prop() { /* … */ } }`, 
- `{ get [expression]() { /* … */ } }` 
- `{ set prop(val) { /* … */ } }` 
- `{ set [expression](val) { /* … */ } }` 
 
Classes
-------

 
[JavaScript classes.](classes)

-   [`constructor`](cnstr.md)
-   [`extends`](classes/extends)
-   [Private properties](privateProperties.md)
-   [Public class fields](publicClassFields.md)
-   [`static`](classes/static)
-   [Static initialization blocks](classes/static_initialization_blocks)

- `constructor(argument0, argument1, /* …, */ argumentN) { /* … */ }`
- `class ChildClass extends ParentClass { /* … */ }`
- (under proposal) in class, `#privateField;`   `#privateMethod() { // … }`
- in class,  `instanceField;`, `static staticField;`
- in class, class `static staticField;`
- `class ClassWithSIB { static { // …  } }`
 
Additional reference pages 
--------------------------

 
-   [Lexical grammar](lexical_grammar)
-   [Data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
-   [Iteration protocols](iteration_protocols)
-   [Trailing commas](trailing_commas)
-   [Errors](errors)
-   [Strict mode](strict_mode)
-   [Deprecated features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)



 
© 2005--2023 MDN contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

