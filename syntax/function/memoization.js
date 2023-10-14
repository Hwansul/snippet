class MyObject {
  constructor(data) {
    this.data = data;
    this.data[this.data.length - 2] = { value: 'Non-empty' };
  }

  firstNonEmptyItem() {
    return this.data.find(v => !!v.value);
  }

  firstNonEmptyItemMemo() {
    if (!this.firstNonEmpty)
      this.firstNonEmpty = this.data.find(v => !!v.value);
    return this.firstNonEmpty;
  }
}

const myObject = new MyObject(Array(2000).fill({ value: null }));

for (let i = 0; i < 100; i ++)
  myObject.firstNonEmptyItem();       // ~4000ms
for (let i = 0; i < 100; i ++)
  myObject.firstNonEmptyItemMemo();   // ~70ms

const memoize = fn => new Proxy(fn, {
  cache: new Map(),
  apply (target, thisArg, argsList) {
    let cacheKey = argsList.toString();
    if(!this.cache.has(cacheKey))
      this.cache.set(cacheKey, target.apply(thisArg, argsList));
    return this.cache.get(cacheKey);
  }
});

const fibonacci = n => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
const memoizedFibonacci = memoize(fibonacci);

for (let i = 0; i < 100; i ++)
  fibonacci(30);                      // ~5000ms
for (let i = 0; i < 100; i ++)
  memoizedFibonacci(30);              // ~50ms
