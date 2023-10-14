console.log(this === window); // true

function f() {
  return this;
}

console.log(f() === window); // true

'use strict';

function f() {
  return this;
}

console.log(f()); // undefined

const obj = {
  f: function() {
    return this;
  }
};

const myObj = Object.create(obj);
myObj.foo = 1;

console.log(myObj.f()); // { foo: 1 }

class C {
  constructor() {
    this.x = 10;
  }
}

const obj = new C();
console.log(obj.x); // 10

const f = () => this;

console.log(f() === window); // true

const obj = {
  foo: function() {
    const baz = () => this;
    return baz();
  },
  bar: () => this
};

console.log(obj.foo()); // { foo, bar }
console.log(obj.bar() === window); // true

const el = document.getElementById('my-el');

el.addEventListener('click', function() {
  console.log(this === el); // true
});

function f() {
  return this.foo;
}

var x = f.bind({foo: 'hello'});
console.log(x()); // 'hello'

function f() {
  return this.foo;
}

console.log(f.call({foo: 'hi'})); // 'hi'
