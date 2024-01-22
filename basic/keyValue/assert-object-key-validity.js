const assertValidKeys = (obj, keys) =>
  Object.keys(obj).every(key => keys.includes(key));

assertValidKeys({ id: 10, name: 'apple' }, ['id', 'name']); // true
assertValidKeys({ id: 10, name: 'apple' }, ['id', 'type']); // false
