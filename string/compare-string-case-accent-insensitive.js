const arr = ['ä', 'a', 'b', 'A', 'B', 'Å'];

const localeCompare = (a, b) => a.localeCompare(b);
const collator = new Intl.Collator();
const deCollator = new Intl.Collator('de');
const svCollator = new Intl.Collator('sv');

arr.sort(localeCompare);      // ['a', 'A', 'Å', 'ä', 'b', 'B']
arr.sort(collator.compare);   // ['a', 'A', 'Å', 'ä', 'b', 'B']
arr.sort(deCollator.compare); // ['a', 'A', 'Å', 'ä', 'b', 'B']
arr.sort(svCollator.compare); // ['a', 'A', 'b', 'B', 'Å', 'ä']
