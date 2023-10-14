{} === {}; // false
Object.is({}, {}); // false

1 === 1; // true
Object.is(1, 1); // true

+0 === -0; // true
Object.is(+0, -0); // false

NaN === NaN; // false
Object.is(NaN, NaN); // true
