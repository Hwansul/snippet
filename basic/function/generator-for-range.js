function* generateRange(end, start = 0, step = 1) {
  let x = start - step;
  while(x < end - step) yield x += step;
}

const gen5 = generateRange(5);
let x = gen5.next();

while (!x.done) {
  console.log(x.value);
  x = gen5.next();
} // Logs: 0, 1, 2, 3, 4

const iterableXx = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
  }
};

console.log([...iterableX]); // [1, 2]

const range = (end, start = 0, step = 1) => {
  function* generateRange() {
    let x = start - step;
    while(x < end - step) yield x += step;
  }
  return {
    [Symbol.iterator]: generateRange
  };
}

console.log([...range(7)]); // [0, 1, 2, 3, 4, 5, 6]
for (let i of range(8, 2, 2)) console.log(i); // Logs: 2, 4, 6
