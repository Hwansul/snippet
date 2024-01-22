const symbolizeKeys = obj =>
  Object.keys(obj).reduce(
    (acc, key) => ({ ...acc, [Symbol(key)]: obj[key] }),
    {}
  );

symbolizeKeys({ id: 10, name: 'apple' });
// { [Symbol(id)]: 10, [Symbol(name)]: 'apple' }
