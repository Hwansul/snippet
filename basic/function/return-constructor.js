class SimpleClass {
  constructor() {
    this.val = 0;
  }
}
new SimpleClass(); // { val: 0 }

class MyClass {
  constructor() {
    this.val = 0;
    return { a: 1, b: 2 };
  }
}
new MyClass(); // { a: 1, b : 2 }

class VerboseClass {
  constructor() {
    this.val = 0;
    return this;
  }
}
new VerboseClass(); // { val: 0 }

class PrimClass {
  constructor() {
    this.val = 0;
    return 20;
  }
}
new PrimitiveClass();  // { val: 0 }
