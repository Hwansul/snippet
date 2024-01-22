const hammingDistance = (num1, num2) =>
  ((num1 ^ num2).toString(2).match(/1/g) || '').length;

hammingDistance(2, 3); // 1
