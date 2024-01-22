const initializeArrayWhile = (conditionFn, mapFn) => {
  const arr = [];
  let i = 0;
  let el = mapFn(i, undefined, arr);
  while (conditionFn(i, el, arr)) {
    arr.push(el);
    i++;
    el = mapFn(i, el, arr);
  }
  return arr;
};

initializeArrayWhile(
  (i, val) => val < 10,
  (i, val, arr) => (i <= 1 ? 1 : val + arr[i - 2])
); // [1, 1, 2, 3, 5, 8]
