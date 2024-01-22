const add = (a, b) => a + b;
const isEven = num => num % 2 === 0;

const data = [2, 3, 1, 5, 4, 6];

const evenValues = data.filter(isEven); // [2, 4, 6]
const evenSum = data.filter(isEven).reduce(add); // 12
