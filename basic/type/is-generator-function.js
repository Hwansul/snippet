const isGeneratorFunction = val =>
  Object.prototype.toString.call(val) === '[object GeneratorFunction]';

isGeneratorFunction(function() {}); // false
isGeneratorFunction(function*() {}); // true
