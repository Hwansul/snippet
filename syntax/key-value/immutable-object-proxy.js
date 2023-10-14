const term = {
  id: 1,
  value: 'hello',
  properties: [{ type: 'usage', value: 'greeting' }],
};

const immutable = obj =>
  new Proxy(obj, {
    get(target, prop) {
      return typeof target[prop] === 'object'
        ? immutable(target[prop])
        : target[prop];
    },
    set() {
      throw new Error('This object is immutable.');
    },
  });

const immutableTerm = immutable(term);
const immutableProperty = immutableTerm.properties[0];

immutableTerm.name = 'hi';            // Error: This object is immutable.
immutableTerm.id = 2;                 // Error: This object is immutable.
immutableProperty.value = 'pronoun';  // Error: This object is immutable.
