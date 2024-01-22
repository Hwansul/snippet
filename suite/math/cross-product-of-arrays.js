const xProd = (a, b) =>
  a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);

xProd([1, 2], ['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
