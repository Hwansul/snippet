const indexBy = (arr, fn) =>
  arr.reduce((obj, v, i) => {
    obj[fn(v, i, arr)] = v;
    return obj;
  }, {});

indexBy([
  { id: 10, name: 'apple' },
  { id: 20, name: 'orange' }
], x => x.id);
// { '10': { id: 10, name: 'apple' }, '20': { id: 20, name: 'orange' } }
