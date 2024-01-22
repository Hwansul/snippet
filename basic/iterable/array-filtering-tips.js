const arr = [1, 2, 3, 4, 5];

arr.find(x => x > 3); // 4

const arr = [1, 2, 3, 4, 5];

arr.indexOf(3); // 2

const arr = [1, 2, 3, 4, 5];

const index = arr.findIndex(x => x === 3);
const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)];
// [1, 2, 4, 5]

const arr = [1, 2, 3, 4, 5];

const index = arr.findIndex(x => x === 3);
arr.splice(index, 1); // [1, 2, 4, 5]
