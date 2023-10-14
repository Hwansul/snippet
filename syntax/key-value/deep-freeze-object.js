const myObj = { a: 10, b: 20, c: 30 };
myObj.a = 12;     // { a: 12, b: 20, c: 30 };

const myArr = [15, 25, 35];
myArr[1] = 28;    // [15, 28, 35];

const myObj = {
  a: 1,
  b: 'hello',
  c: [0, 1, 2],
  d: { e: 1, f: 2 }
};
Object.freeze(myObj);

myObj.a = 10;
myObj.b = 'hi';
myObj.c[1] = 4;
myObj.d.e = 0;
/*
myObj = {
  a: 1,
  b: 'hello',
  c: [0, 4, 2],
  d: { e: 0, f: 2 }
}
*/

const myObj = {
  a: 1,
  b: 'hello',
  c: [0, 1, 2],
  d: { e: 1, f: 2 }
};

const deepFreeze = obj => {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
};
deepFreeze(myObj);

myObj.a = 10;
myObj.b = 'hi';
myObj.c[1] = 4;
myObj.d.e = 0;

/*
myObj = {
  a: 1,
  b: 'hello',
  c: [0, 1, 2],
  d: { e: 1, f: 2 }
}
*/
