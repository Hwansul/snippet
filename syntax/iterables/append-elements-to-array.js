const arr = ['a', 'b', 'c'];
arr.push('d', 'e'); // Returns 5 (new length after appending 2 elements)
// arr = ['a', 'b', 'c', 'd', 'e']

const arr = ['a', 'b', 'c'];
arr.unshift('d', 'e'); // Returns 5 (new length after appending 2 elements)
// arr = ['d', 'e', 'a', 'b', 'c']

const arr = ['a', 'b', 'c'];
arr.splice(1, 0, 'd', 'e');
// arr = ['a', 'd', 'e', 'b', 'c']

const arr = ['a', 'b', 'c'];
arr[arr.length] = 'd';
// arr = ['a', 'b', 'c', 'd']

const arr = ['a', 'b', 'c'];
const arr2 = arr.concat('d', 'e');
// arr = ['a', 'b', 'c'], arr2 = ['a', 'b', 'c', 'd', 'e']
const arr3 = ['d', 'e'].concat(...arr);
// arr = ['a', 'b', 'c'], arr3 = ['d', 'e', 'a', 'b', 'c']

const arr = ['a', 'b', 'c'];
const arr2 = [...arr, 'd', 'e'];
// arr = ['a', 'b', 'c'], arr2 = ['a', 'b', 'c', 'd', 'e']
const arr3 = ['d', 'e', ...arr];
// arr = ['a', 'b', 'c'], arr3 = ['d', 'e', 'a', 'b', 'c']
