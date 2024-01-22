const isNegativeZero = val => val === 0 && 1 / val === -Infinity;

isNegativeZero(-0); // true
isNegativeZero(0); // false
