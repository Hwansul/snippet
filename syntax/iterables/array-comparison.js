const a = [1, 2, 3];
const b = [1, 2, 3];

a === b; // false

const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const a = [1, 2, 3];
const b = [1, 2, 3];

equals(a, b); // true

const str = 'a';
const strObj = new String('a');
str === strObj; // false
equals([str], [strObj]); // true, should be false

null === undefined; // false
equals([null], [undefined]); // true, should be false

const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

const a = [1, 2, 3];
const b = [1, 2, 3];
const str = 'a';
const strObj = new String('a');

equals(a, b); // true
equals([str], [strObj]); // false
equals([null], [undefined]); // false

const equalsIgnoreOrder = (a, b) => {
  if (a.length !== b.length) return false;
  const uniqueValues = new Set([...a, ...b]);
  for (const v of uniqueValues) {
    const aCount = a.filter(e => e === v).length;
    const bCount = b.filter(e => e === v).length;
    if (aCount !== bCount) return false;
  }
  return true;
}
