const nums = [ 3, 6, 9, 12, 15 ];
const [
  k,              // k = 3
  l,              // l = 6
  ,               // Skip a value (9)
  ...n            // n = [12, 15]
] = nums;

const obj = { a: 1, b: 2, c: 3, d: 4 };
const {
  a,              // a = 1
  c: d,           // d = 3
  ...rest         // rest = { b: 2, d: 4 }
} = obj;

const nested = { a: { b: 1, c: 2 }, d: [1, 2]};
const {
  a: {
    b: f,         // f = 1
    ...g          // g = { c: 2 }
  },
  ...h            // h = { d: [1, 2]}
} = nested;

const arr = [ 5, 'b', 4, 'd', 'e', 'f', 2 ];
const {
  6: x,           // x = 2
  0: y,           // y = 5
  2: z,           // z = 4
  length: count,  // count = 7
  name = 'array', // name = 'array' (not present in arr)
  ...restData     // restData = { '1': 'b', '3': 'd', '4': 'e', '5': 'f' }
} = arr;
