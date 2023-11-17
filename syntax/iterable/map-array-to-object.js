const mapObject = (arr, fn) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr);
    return acc;
  }, {});

mapObject([1, 2, 3], a => a * a); // { 1: 1, 2: 4, 3: 9 }
