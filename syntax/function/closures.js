const items = [
  { id: 1, title: 'First' },
  { id: 2, title: 'Second' },
  { id: 3, title: 'Final' }
];
const matcher = /^F/;
const filteringFn = x => matcher.test(x.title);
items.filter(filteringFn); // [{ id: 1, title: 'First' }, { id: 3, title: 'Final' }]

const initCounter = (start = 0) => {
  let value = start;
  return {
    get: () => value,
    increment: () => ++value,
    decrement: () => --value,
    reset: () => value = start
  };
}

const counter = initCounter(5);
counter.get(); // 5
counter.increment(); // 6
counter.increment(); // 7
counter.decrement(); // 6
counter.reset(); // 5
