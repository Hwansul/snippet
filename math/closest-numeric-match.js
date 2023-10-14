const closest = (arr, n) =>
  arr.reduce((acc, num) => (Math.abs(num - n) < Math.abs(acc - n) ? num : acc));

closest([6, 1, 3, 7, 9], 5); // 6
