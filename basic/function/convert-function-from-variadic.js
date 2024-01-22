const spreadOver = fn => argsArr => fn(...argsArr);

const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3
