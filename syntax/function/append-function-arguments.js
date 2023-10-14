const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);

const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetJohn = partialRight(greet, 'John');
greetJohn('Hello'); // 'Hello John!'
