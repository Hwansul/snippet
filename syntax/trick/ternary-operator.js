// Code using if...else
let x;
if (someCondition) {
  x = 10;
} else {
  x = 20;
}

// Same result using the ternary operator
const x = someCondition ? 10 : 20;

// Code using if...else
const conditionalX = (condition, x) => {
  if (condition) return x;
  else return x + 5;
}

// Same result using the ternary operator
const conditionalX = (condition, x) => condition ? x : x + 5;
