let x = 'some-value';

// This doesn't look too nice
if (!!x) {
  // ...
}

// This is a lot more readable
if (Boolean(x)) {
  // ...
}

const values = [0, 0, 2, 0, 3];
// Use as the callback for Array.prototype.some()
const hasValidValue = values.some(Boolean);
// Use as the callback for Array.prototype.filter()
const nonEmptyValues = values.filter(Boolean);

let x = new Boolean(false);

if (x) {
  // This code is executed
}
