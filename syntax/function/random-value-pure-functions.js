// An impure function that returns a random value
const getNumber = (min = 0, max = 1) =>
  Math.max(Math.min(Math.random(), max), min);

// A pure function that returns a random value
const getNumber = (min = 0, max = 1, num = Math.random()) =>
  Math.max(Math.min(num, max), min);
