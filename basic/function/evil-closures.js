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

const randomNumber = (limit = 100, random = Math.random) => random() * limit;

randomNumber(10); // 4.0
randomNumber(10, () => 0.2); // 2.0
