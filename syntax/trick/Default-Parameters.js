/**
 * Set a default value for each parameter
 * by adding = default value when defining it.
 */

function add(num1 = 0, num2 = 0) {
  // Add the numbers
  // If num1 or num2 is not provided, 0 will be used
  return num1 + num2;
}

// returns 4
add(4);
