const square = a => a * a;

// Equivalent regular function
function square(a) {
  return a * a;
}

function logThis() {
  console.log(this);
}
document.addEventListener('click', logThis);
// `this` refers to the document

const logThisArrow = () => {
  console.log(this);
};
document.addEventListener('click', logThisArrow);
// `this` refers to the global object

function logThis() {
  console.log(this);
}
logThis.call(42);       // Logs: 42

const logThisArrow = () => {
  console.log(this);
};
logThisArrow.call(42);  // Logs the global object

const obj = {
  x: 42,
  logThisX: function() {
    console.log(this.x, this);
  },
  logThisXArrow: () => {
    console.log(this.x, this);
  }
};

obj.logThisX();       // Logs: 42, Object {...}
obj.logThisXArrow();  // Logs: undefined, the global object

function Foo(bar) {
  this.bar = bar;
}
const a = new Foo(42);  // Foo {bar: 42}

const Bar = foo => {
  this.foo = foo;
};
const b = new Bar(42);  // TypeError: Bar is not a constructor

function sum() {
  return arguments[0] + arguments[1];
};
sum(4, 6);        // 10

const arguments = [1, 2, 3];
const sumArrow = () => {
  return arguments[0] + arguments[1];
};
sumArrow(4, 6);   // 3 (resolves to 1 + 2)

const sumRest = (...arguments) => {
  return arguments[0] + arguments[1];
}
sumRest(4, 6);    // 10
