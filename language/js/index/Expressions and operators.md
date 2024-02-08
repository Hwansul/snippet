# Expressions and operators

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