// Array's values as arguments
const a = [1, 2, 3];
Math.max(...a); // 3

// Clone an array
const b = [4, 5, 6];
const c = [...b]; // c = [4, 5, 6], b !== c

// Concatenate two arrays
const d = [...a, ...b]; // d = [1, 2, 3, 4, 5, 6]

// Flatten an array
const e = [[1, 2], [3, 4]];
const f = [...e[0], ...e[1]]; // f = [1, 2, 3, 4]

// Convert iterable to array
const g = [...'hello']; // g = ['h', 'e', 'l', 'l', 'o']

// Rest parameter syntax, not to be confused with the spread operator
const fn = (str, ...nums) => `${str}_${nums.join('')}`;
fn('hi', 1, 2, 3); // 'hi_123', `nums` will be [1, 2, 3]

const data = [4, 5, 6];
// Spread operator, expanding the array
fn('hey', ...data); // 'hey_456', `nums` will be [4, 5, 6]
