const arr = ['a', 'b', 'c'];
const deleted = arr.splice(1, 1); // ['b']

console.log(arr); // ['a', 'c']

const arr = ['a', 'b', 'c'];
const filtered = arr.filter(el => el !== 'b'); // ['a', 'c']

console.log(arr); // ['a', 'b', 'c']
