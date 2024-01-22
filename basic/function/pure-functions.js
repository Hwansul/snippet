// Pure
const add = (x, y) => x + y;
const concat = (arr, value) => [...arr, value];
const order = arr => [...arr].sort((a, b) => a - b);

// Impure
const addRandom = x => x + Math.random();
const pushConcat = (arr, value) => { arr.push(value); return arr; }
const reorder = arr => arr.sort((a, b) => a - b);
