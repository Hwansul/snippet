const toOptionalFixed = (num, digits) =>
  `${Number.parseFloat(num.toFixed(digits))}`;

toOptionalFixed(1, 2); // '1'
toOptionalFixed(1.001, 2); // '1'
toOptionalFixed(1.500, 2); // '1.5'
