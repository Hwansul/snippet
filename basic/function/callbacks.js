const nums = [1, 2, 3];
const printDoublePlusOne = n => console.log(2 * n + 1);

nums.map(printDoublePlusOne); // LOGS: 3, 5, 7

const nums = fetch('https://api.nums.org'); // Suppose the response is [1, 2, 3]
const printDoublePlusOne = n => console.log(2 * n + 1);

nums.then(printDoublePlusOne); // LOGS: 3, 5, 7
