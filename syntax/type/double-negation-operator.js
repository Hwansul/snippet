const x = 1;
const y = null;

!!x; // true
!!y; // false

const x = 1;
const y = null;

Boolean(x); // true
Boolean(y); // false

const values = [0, 0, 2, 0, 3];
// Kinda readable, but not great
values.filter(x => !!x); // [2, 3]
// Arguably more readable
values.filter(Boolean); // [2, 3]
