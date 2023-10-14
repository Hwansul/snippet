const data = [3, 4];
// Same as for (let k in data) console.log(k)
Object.keys(data).forEach(k => console.log(k));
// 0 1

const data = [3, 4];
// Iterate over the values
Object.values(data).forEach(v => console.log(v));
// 3 4

const data = [3, 4];
// Iterate over the data, returning key-value pairs
Object.entries(data).forEach(e => console.log(e[0], e[1]));
// [0, 3] [1, 4]
