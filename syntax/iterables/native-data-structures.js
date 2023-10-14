const nums = [1, 2, 3];
const strs = Array.from('est');

nums.push(6);
nums.push(4, 9);
strs.unshift('t');

nums.length;                     // 6
nums[nums.length - 1];           // 9
strs[0];                         // 't'
strs[2];                         // 's'

nums.slice(1, 3);                // [2, 3]
nums.map(n => n * 2);            // [2, 4, 6, 12, 8, 18]
nums.filter(n => n % 2 === 0);   // [2, 6, 4]
nums.reduce((a, n) => a + n, 0); // 25

strs.reverse();                  // ['t', 's', 'e', 't']
strs.join('');                   // 'test'

const nums = new Set([1, 2, 3]);

nums.add(4);
nums.add(1);
nums.add(5);
nums.add(4);

nums.size;                       // 5
nums.has(4);                     // true

nums.delete(4);
nums.has(4);                     // false

[...nums];                       // [1, 2, 3, 5]

nums.clear();
nums.size;                       // 0

const items = new Map([
  [1, { name: 'John' }],
  [2, { name: 'Mary' }]
]);

items.set(4, { name: 'Alan' });
items.set(2, { name: 'Jeff' });

items.size;                      // 3
items.has(4);                    // true
items.get(2);                    // { name: 'Jeff' }

items.delete(2);
items.size;                      // 2

[...items.keys()];               // [1, 4]
[...items.values()];             // [{ name: 'John' }, { name: 'Alan' }]

items.clear();
items.size;                      // 0
