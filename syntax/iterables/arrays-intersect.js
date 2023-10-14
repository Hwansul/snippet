const intersects = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].some(x => s.has(x));
};

intersects(['a', 'b'], ['b', 'c']); // true
intersects(['a', 'b'], ['c', 'd']); // false
