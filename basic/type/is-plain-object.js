const isPlainObject = val =>
  !!val && typeof val === 'object' && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
