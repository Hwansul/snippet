const swapCase = str =>
  [...str]
    .map(c => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
    .join('');

swapCase('Hello world!'); // 'hELLO WORLD!'
