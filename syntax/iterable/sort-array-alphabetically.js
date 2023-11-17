const alphabetical = (arr, getter, order = 'asc') =>
  arr.sort(
    order === 'desc'
      ? (a, b) => getter(b).localeCompare(getter(a))
      : (a, b) => getter(a).localeCompare(getter(b))
  );

const people = [ { name: 'John' }, { name: 'Adam' }, { name: 'Mary' } ];
alphabetical(people, g => g.name);
// [ { name: 'Adam' }, { name: 'John' }, { name: 'Mary' } ]
alphabetical(people, g => g.name, 'desc');
// [ { name: 'Mary' }, { name: 'John' }, { name: 'Adam' } ]
