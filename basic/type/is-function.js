const isFunction = val => typeof val === 'function';

isFunction('x'); // false
isFunction(x => x); // true
