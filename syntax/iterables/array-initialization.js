const arr = Array(3); // [ , , ] - 3 empty slots
arr.map(() => 1); // [ , , ] - map() skips empty slots
arr.map((_, i) => i); // [ , , ] - map() skips empty slots
arr[0]; // undefined - actually, it is an empty slot

const arr = Array.from({ length: 3 }); // [undefined, undefined, undefined]
arr.map(() => 1); // [1, 1, 1]
arr.map((_, i) => i); // [0, 1, 2]
const staticArr = Array.from({ length: 3 }, () => 1); // [1, 1, 1]
const indexArr = Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]

const nullArr = new Array(3).fill(null); // [null, null, null]
const staticArr = Array.from({ length: 3 }).fill(1); // [1, 1, 1]
const indexArr = Array(3).fill(null).map((_, i) => i); // [0, 1, 2]

const arr = Array(3).map(() => 1); // [ , , ] - map() skips empty slots
const staticArr = Array.from({ length: 3 }).map(() => 1); // [1, 1, 1]
const indexArr = Array.from({ length: 3 }).map((_, i) => i); // [0, 1, 2]
const fractionArr =
  Array.from({ length: 3 }).map((_, i, a) => i / a.length); // [0, 0.5, 1]

const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);
const initializeMappedArray = (n, mapFn = (_, i) => i) =>
  Array(n).fill(null).map(mapFn);

initializeArrayWithValues(4, 2); // [2, 2, 2, 2]
initializeMappedArray(4, (_, i) => i * 2); // [0, 2, 4, 6]
