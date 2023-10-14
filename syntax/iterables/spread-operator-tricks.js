const arr = [1, 2, 3];
const arr2 = [...arr];
// [1, 2, 3]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]

const arr = [1, 2, 3];
const arr2 = [0, ...arr, 4];
// [0, 1, 2, 3, 4]
