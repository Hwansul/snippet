const superSet = (a, b) => {
  const sA = new Set(a), sB = new Set(b);
  return [...sB].every(v => sA.has(v));
};

superSet(new Set([1, 2, 3, 4]), new Set([1, 2])); // true
superSet(new Set([1, 2, 3, 4]), new Set([1, 5])); // false
