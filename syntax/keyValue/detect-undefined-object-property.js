const obj = { prop : undefined };
obj.prop === undefined; // true
typeof obj.prop === 'undefined'; // true
obj.porp === undefined; // true
typeof obj.porp === 'undefined'; // true

const hasUndefinedProperty = (obj, prop) =>
  obj.hasOwnProperty(prop) && obj[prop] === undefined;

const obj = { prop: undefined };
hasUndefinedProperty(obj, 'prop'); // true
hasUndefinedProperty(obj, 'porp'); // false
