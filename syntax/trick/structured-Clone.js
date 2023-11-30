/**
 * The structuredClone() method accepts an array or object as an argument,
 * and returns a deep copy or deep clone.
 */

// A multidimensional array
let wizards = [
  {
    name: "Radagast",
    color: "brown",
  },
  {
    name: "Gandalf",
    color: "gray",
  },
];

// Create a copy of the wizards array
let wizardsCopy = structuredClone(wizards);
