/**
 * Convert object or array data into a string.
 */

// Save an object
let lunch = {
  sandwich: "turkey",
  chips: "Cape Cod",
  drink: "Pepsi",
};
localStorage.setItem("lunchOrder", JSON.stringify(lunch));

// Save an array
let drinks = ["Pepsi", "water", "lemonade"];
localStorage.setItem("drinkOptions", JSON.stringify(drinks));
