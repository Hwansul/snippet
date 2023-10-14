const arr = [1, 2, 3];
const double = x => x * 2;
arr.map(double); // [2, 4, 6]

const arr = [1, 2, 3];
const isOdd = x => x % 2 === 1;
arr.filter(isOdd); // [1, 3]

const arr = [1, 2, 3];

const sum = (x, y) => x + y;
arr.reduce(sum, 0); // 6

const increment = (x, y) => [...x, x[x.length - 1] + y];
arr.reduce(increment, [0]); // [0, 1, 3, 6]

const arr = [1, 2, 3];
const isOdd = x => x % 2 === 1;
arr.find(isOdd); // 1
