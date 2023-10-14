const objectify = (arr, mapKey, mapValue = i => i) =>
  arr.reduce((acc, item) => {
    acc[mapKey(item)] = mapValue(item);
    return acc;
  }, {});

const people = [ { name: 'John', age: 42 }, { name: 'Adam', age: 39 } ];
objectify(people, p => p.name.toLowerCase());
// { john: { name: 'John', age: 42 }, adam: { name: 'Adam', age: 39 } }
objectify(
  people,
  p => p.name.toLowerCase(),
  p => p.age
);
// { john: 42, adam: 39 }
