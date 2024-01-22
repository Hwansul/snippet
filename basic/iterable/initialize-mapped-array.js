const initializeMappedArray = (n, mapFn = (_, i) => i) =>
  Array(n).fill(null).map(mapFn);

initializeMappedArray(5); // [0, 1, 2, 3, 4]
initializeMappedArray(5, i => `item ${i + 1}`);
// ['item 1', 'item 2', 'item 3', 'item 4', 'item 5']
