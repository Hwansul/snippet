/**
 * Convert stringified JSON back into an object or array.
 */

// Get data from local storage
let savedLunch = JSON.parse(localStorage.getItem("lunchOrder"));
let savedDrinks = JSON.parse(localStorage.getItem("drinkOptions"));
