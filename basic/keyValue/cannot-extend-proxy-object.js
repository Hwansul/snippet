class MyProxy {
  constructor(value) {
    Object.keys(value).forEach(key => (this[key] = value[key]));
    return new Proxy(this, {
      set(object, key, value) {
        console.log(`Called with ${key} = ${value}`);
        object[key] = value;
        return true;
      }
    });
  }
}

const myProxy = new MyProxy({ a: 1 });
myProxy.b = 2; // LOGS: 'Called with b = 2'
