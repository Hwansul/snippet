/**
 * A way to extract variables from array properties.
 *
 * Define an array of variables,
 * and the destructuring syntax
 * will pull the values at the matching indexes out
 * and assign them to the variables.
 */

let lunch = ["turkey sandwich", "soda", "chips", "cookie"];

let [entree, drink, side, desert] = lunch;

// logs "turkey sandwich"
console.log(entree);

// logs "chips"
console.log(side);
