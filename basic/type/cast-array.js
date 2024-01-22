const castArray = val => (Array.isArray(val) ? val : [val]);

castArray('foo'); // ['foo']
castArray([1]); // [1]
