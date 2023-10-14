const matches = (obj, source) =>
  Object.keys(source).every(
    key => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true });
// true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true });
// false
