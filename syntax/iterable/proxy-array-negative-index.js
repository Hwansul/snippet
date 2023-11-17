const handler = {
  get(target, key, receiver) {
    const index = Number(key);
    const prop = index < 0 ? `${target.length + index}` : key;
    return Reflect.get(target, prop, receiver);
  },
};

const createArray = (...elements) => {
  const arr = [...elements];
  return new Proxy(arr, handler);
};

let arr = createArray('a', 'b', 'c');

arr[-1]; // 'c'
arr[-1]; // 'b'
