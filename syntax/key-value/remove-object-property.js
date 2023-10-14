const pet = {
  species: 'dog',
  age: 3,
  name: 'celeste',
  gender: 'female'
};

pet.gender = undefined;
Object.keys(pet); // ['species', 'age', 'name', 'gender']

const pet = {
  species: 'dog',
  age: 3,
  name: 'celeste',
  gender: 'female'
};

delete pet.gender;
Object.keys(pet); // ['species', 'age', 'name']

const pet = {
  species: 'dog',
  age: 3,
  name: 'celeste',
  gender: 'female'
};

const { gender, ...newPet } = pet;
Object.keys(pet); // ['species', 'age', 'name', 'gender]
Object.keys(newPet); // ['species', 'age', 'name']
