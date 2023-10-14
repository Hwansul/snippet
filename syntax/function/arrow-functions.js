function square(a) {
  return a * a;
}

const square = function (a) {
  return a * a;
}

const square = (a) => {
  return a * a;
}

const square = a => {
  return a * a;
}

const square = a => a * a;

function simple() { return this; }
const object = {
  method() { return this; }
};
class Class {
  classMethod() { console.log(this); }
}
const instance = new Class();

simple();                   // `this` refers to the global object
new simple();               // `this` refers to the newly created instance

object.method();            // `this` refers to `object`
simple.call(object);        // `this` refers to `object`

instance.classMethod();     // `this` refers to `instance`
setTimeout(
  instance.classMethod, 0   // `this` refers to the global object
);

const simple = () => this;
const object = {
  method: () => this
};
class Class {
  classMethod = () => { console.log(this); }
}
const instance = new Class();

simple();                   // `this` refers to the global object
new simple();               // Uncaught TypeError: simple is not a constructor

object.method();            // `this` refers to the global object
simple.call(object);        // `this` refers to the global object

instance.classMethod();     // `this` refers to `instance`
setTimeout(
  instance.classMethod, 0   // `this` refers to `instance`
);
