function printThisAndData(...data) {
  console.log(this.data, ...data);
}

const obj = { data: 0 };
const data = [1, 2, 3];

printThisAndData.call(obj, data);       // logs: 0 [1, 2, 3]
printThisAndData.call(obj, ...data);    // logs: 0 1 2 3

function printThisAndData(...data) {
  console.log(this.data, ...data);
}

const obj = { data: 0 };
const data = [1, 2, 3];

printThisAndData.apply(obj, data);      // logs: 0 1 2 3
printThisAndData.apply(obj, ...data);   // Throws a TypeError

function printThisAndData(...data) {
  console.log(this.data, ...data);
}

const obj = { data: 0 };
const data = [1, 2, 3];

const printObjAndData = printThisAndData.bind(obj);

printObjAndData(data);                  // logs: 0 [1, 2, 3]
printObjAndData(...data);               // logs: 0 1 2 3

const printObjTwoAndData = printThisAndData.bind(obj, 2);

printObjTwoAndData(data);               // logs: 0 2 [1, 2, 3]
printObjTwoAndData(...data);            // logs: 0 2 1 2 3
