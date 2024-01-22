/**
 * Take an array or object (or other iterable) and expand its items into their own individual values.
 */
let sandwiches = ["tuna", "turkey", "pb&j"];

// logs ["tuna", "turkey", "pb&j"]
console.log(sandwiches);

// logs tuna turkey pb&j
console.log(...sandwiches);

/**
 * You can use it to pass array values into a function.
 */

let numbers = [4, 2];

// Instead of this...
add(numbers[0], numbers[1]);

// You can do this...
add(...numbers);

/**
 * You can also use to copy or merge arrays or objects.
 */
let moreSandwiches = [...sandwiches1, ...sandwiches2];
let allWizards = { ...radagast, ...gandalf };
