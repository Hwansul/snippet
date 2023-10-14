const rightSubstrGenerator = function* (str) {
  if (!str.length) return;
  for (let i in str) yield str.slice(-i - 1);
};

[...rightSubstrGenerator('hello')];
// [ 'o', 'lo', 'llo', 'ello', 'hello' ]
