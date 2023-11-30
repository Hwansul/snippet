const person = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  socialSecurityNumber: '123-45-6789',
};

Object.defineProperty(person, 'socialSecurityNumber', {
  enumerable: false,
});

person.hasOwnProperty('socialSecurityNumber'); // true
person.propertyIsEnumerable('socialSecurityNumber'); // false

Object.keys(person); // ['name', 'surname', 'age']
Object.getOwnPropertyNames(person);
// ['name', 'surname', 'age', 'socialSecurityNumber']

const clone = { ...person };
clone.socialSecurityNumber; // undefined
