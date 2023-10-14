const a = new Date(2022, 01, 10);
const b = new Date(2022, 01, 10);

a === b; // false

const a = new Date(2022, 01, 10);
const b = new Date(2022, 01, 10);

a.getTime() === b.getTime(); // true
