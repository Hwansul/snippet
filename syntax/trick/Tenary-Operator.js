/**
 * A shorter way to write if...else statements. It has three parts:
 */
let someVar = [the_condition] ? [the_value_if_true] : [the_value_if_false];

/**
 * It’s the equivalent of this.
 * ```javascript
 * let someVar;
 * if ([the condition]) {
 *   someVar = [the value if true];
 * }
 * else {
 *   someVar = [the value if false];
 * }
 *```
 */

// Let’s say we wanted to define answer as num if num is greater than 10. If not, we’ll use 42.
let num = 0;
let answer = num > 10 ? num : 42;
