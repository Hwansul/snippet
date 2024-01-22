const forOwnRight = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .forEach(key => fn(obj[key], key, obj));

forOwnRight({ foo: 'bar', a: 1 }, v => console.log(v)); // 1, 'bar'
