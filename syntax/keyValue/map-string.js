const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');

mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'
