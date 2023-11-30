const without = (arr, ...args) => arr.filter(v => !args.includes(v));

without([2, 1, 2, 3], 1, 2); // [3]
