let str = 'Hello';
let copy = str;
copy = 'Hi';
// str = 'Hello', copy = 'Hi'

let obj = { a: 1, b: 2 };
let objCopy = obj;
objCopy.b = 4;
// obj = { a: 1, b: 4}, objCopy = { a: 1, b: 4 }

let obj = { a: 1, b: 2};
let clone = { ...obj };
clone.b = 4;
// obj = { a: 1, b: 2}, clone = { a: 1, b: 4 }

let otherClone = Object.assign({}, obj);
otherClone.b = 6;
clone.b = 4;
// obj = { a: 1, b: 2}, otherClone = { a: 1, b: 6 }

let obj = { a: 1, b: { c: 2 } };
let clone = JSON.parse(JSON.stringify(obj));
clone.b.c = 4;
// obj = { a: 1, b: { c: 2 }}, clone = { a: 1, b: { c: 4 } }
