const lowerize = obj =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k.toLowerCase()] = obj[k];
    return acc;
  }, {});

lowerize({ Name: 'John', Age: 22 }); // { name: 'John', age: 22 }
