const numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => console.log(num * 2));
// No return value, output: 2, 4, 6, 8, 10

const doubledNumbers = numbers.map(num => num * 2);
// Returns a new array: [2, 4, 6, 8, 10]
