const takeUntil = (arr, fn) => {
  for (const [i, val] of arr.entries()) if (fn(val)) return arr.slice(0, i);
  return arr;
};

takeUntil([1, 2, 3, 4], n => n >= 3); // [1, 2]
