const obj = { a: 1 };
obj.b = 2;
obj.c = 3;
// obj = { a: 1, b: 2, c: 3 }

const obj = { a: 1 };
const bKey = 'b';
obj[bKey] = 2;
obj['c'] = 3;
// obj = { a: 1, b: 2, c: 3 }

const obj = { a: 1 };
Object.assign(obj, { b: 2 }, { c: 3 });
// obj = { a: 1, b: 2, c: 3 }

const obj = { a: 1 };
Object.defineProperty(obj, 'b', {
  value: 2,
  enumerable: true,
  configurable: true,
  writable: true
});
Object.defineProperty(obj, 'c', {
  value: 3,
  enumerable: true,
  configurable: true,
  writable: true
});
// obj = { a: 1, b: 2, c: 3 }

const obj = { a: 1 };
const newObj = { ...obj, b: 2, c: 3 };
// obj = { a: 1 }
// newObj = { a: 1, b: 2, c: 3 }
