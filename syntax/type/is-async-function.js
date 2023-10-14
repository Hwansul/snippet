const isAsyncFunction = val =>
  Object.prototype.toString.call(val) === '[object AsyncFunction]';

isAsyncFunction(function() {}); // false
isAsyncFunction(async function() {}); // true
