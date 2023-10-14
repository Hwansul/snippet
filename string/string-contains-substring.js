const str = 'Hello world';
str.includes('world'); // true
str.includes('foo'); // false

const str = 'Hello world';
str.indexOf('world') !== -1; // true
str.indexOf('foo') !== -1; // false

const str = 'Hello world';
const token = 'WORLD';
str.toLowerCase().includes(token.toLowerCase()); // true
