const leftSubstrGenerator = function* (str) {
  if (!str.length) return;
  for (let i in str) yield str.slice(0, i + 1);
};

[...leftSubstrGenerator('hello')];
// [ 'h', 'he', 'hel', 'hell', 'hello' ]
