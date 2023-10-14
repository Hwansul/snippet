const hasValue = (obj, value) => Object.values(obj).includes(value);

const obj = { a: 100, b: 200 };
hasValue(obj, 100); // true
hasValue(obj, 999); // false
