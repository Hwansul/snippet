const objectToEntries = obj => Object.keys(obj).map(k => [k, obj[k]]);

objectToEntries({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
