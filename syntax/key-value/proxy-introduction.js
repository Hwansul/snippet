const proxy = new Proxy(target, handler);

const targetObj = { name: 'John', age: 30 };

const handler = {
  get(target, property) {
    return property in target ? target[property] : null;
  }
};

const proxyObj = new Proxy(targetObj, handler);

proxyObj.name; // 'John'
proxyObj.age; // 30
proxyObj.address; // null
