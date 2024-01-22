const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true
