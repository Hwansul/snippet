/**
 * If you want to define a property in an object,
 * and that key name already exists as a variable within the object’s scope,
 * you don’t have to explicitly assign a value.
 * You can use just the key name, and that variable’s value is used automatically.
 */

// Some details
let name = "Merlin";
let job = "wizard";
let age = "old AF";

// The object
let wizard = {
  name: name, // The old way
  job, // ES6 shorthand
  age, // ES6 shorthand
};
