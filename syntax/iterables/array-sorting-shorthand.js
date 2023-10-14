const arr = [8, 2, 1, 4, 5, 0];
// Sort in ascending order
arr.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1
  return 0;
}); // [0, 1, 2, 4, 5, 8]

const arr = [8, 2, 1, 4, 5, 0];
// Sort in ascending order
arr.sort((a, b) => a - b); // [0, 1, 2, 4, 5, 8]
// Sort in descending order
arr.sort((a, b) => b - a); // [8, 5, 4, 2, 1, 0]

const s = ['Hi', 'Hola', 'Hello'];
// Sort in ascending order
arr.sort((a, b) => a.localeCompare(b)); // ['Hello', 'Hi', 'Hola']
// Sort in descending order
arr.sort((a, b) => b.localeCompare(a)); // ['Hola', 'Hi', 'Hello']
