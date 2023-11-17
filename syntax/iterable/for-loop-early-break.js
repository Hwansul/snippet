const smallArray = [0, 2];
const largeArray = Array.from({ length: 1000 }, (_, i) => i);

const areEqual = (a, b) => {
  let result = true;
  a.forEach((x, i) => {
    if (!result) return;
    if (b[i] === undefined || x !== b[i]) result = false;
  });
  return result;
}

areEqual(largeArray, smallArray); // false
// Will loop over all items in `largeArray`

const smallArray = [0, 2];
const largeArray = Array.from({ length: 1000 }, (_, i) => i);

const areEqual = (a, b) => {
  for (let i in a) {
    if (b[i] === undefined || a[i] !== b[i]) return false;
  }
  return true;
}

areEqual(largeArray, smallArray); // false
// Will only loop until the first mismatch is encountered
