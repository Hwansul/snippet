const toFixedWithoutZeros = (num, precision) =>
  num.toFixed(precision).replace(/\.0+$/, '');

toFixedWithoutZeros(1.001, 2); // '1'
toFixedWithoutZeros(1.500, 2); // '1.50'

const toFixedWithoutZeros = (num, precision) =>
  `${1 * num.toFixed(precision)}`;

toFixedWithoutZeros(1.001, 2); // '1'
toFixedWithoutZeros(1.500, 2); // '1.5'

const toFixedWithoutZeros = (num, precision) =>
  `${Number.parseFloat(num.toFixed(precision))}`;

toFixedWithoutZeros(1.001, 2); // '1'
toFixedWithoutZeros(1.500, 2); // '1.5'
