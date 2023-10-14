const user = {
  id: 1234,
  username: 'johnsmith',
  name: 'John Smith',
  age: 39
};

JSON.stringify(user, ['username', 'name']);
// '{ "username": "johnsmith", "name": "John Smith" }'

class Point {
  constructor (x, y) {
    this.x = x;
    this. y = y;
  }
}

const target = {
  id: 1234,
  location: new Point(10, 20),
  name: 'Delivery point',
};

JSON.stringify(target, (key, value) => {
  // Exclude id
  if (key === 'id') return undefined;
  // Convert location to an array of coordinates
  if (value instanceof Point) return [value.x, value.y];
  // Return other properties (i.e. name) without modification
  return value;
});
// '{ "location": [10, 20], "name": "Delivery point" }'
