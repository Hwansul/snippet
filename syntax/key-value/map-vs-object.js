const people = [
  { id: 1, name: 'John', surname: 'Doe', age: 30 },
  { id: 2, name: 'Jane', surname: 'Doe', age: 28 },
];

const peopleIndex = people.reduce((index, person) => {
  index[person.id] = `${person.name} ${person.surname}`;
  return index;
}, {});
// peopleIndex = {
//   '1': 'John Doe',
//   '2': 'Jane Doe',
// }

const peopleIndexMap = new Map(
  people.map(person => [person, `${person.name} ${person.surname}`])
);

// peopleIndexMap = Map {
//   { id: 1, name: 'John', surname: 'Doe', age: 30 } => 'John Doe',
//   { id: 2, name: 'Jane', surname: 'Doe', age: 28 } => 'Jane Doe',
// }

const obj = { a: 1, b: 2, c: 3 };
const objEntries = Object.entries(obj);
// ['a', 1], ['b', 2], ['c', 3]
for (const [key, value] of objEntries)
  console.log(`${key}: ${value}`);

const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
const mapEntries = [...map.entries()]; // Same as [...map]
// [['a', 1], ['b', 2], ['c', 3]]
for (const [key, value] of map)
  console.log(`${key} => ${value}`);
