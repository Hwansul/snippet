const items = ['a', 'b', 'c'];

for (let [index, item] of items.entries()) {
  console.log(`${index}: ${item}`);
}
// LOGS: 0: a, 1: b, 2: c
