let myObj = { a: 1 };
const myFunc = obj => {
  obj.a++;
  return obj;
}
let otherObj = myFunc(myObj);

myObj;                  // { a: 2 }
otherObj;               // { a: 2 }
myObj === otherObj;     // true

myObj = { a: 4, b: 0 };

myObj;                  // { a: 4, b: 0 }
otherObj;               // { a: 2 }
myObj === otherObj;     // false
