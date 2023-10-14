class Animal { }

class Dog extends Animal { }
class Cat extends Animal { }

const max = new Dog();
max.name = 'Max';

const claire = new Cat();
claire.name = 'Claire';

const animal = {};

const dog = Object.create(animal);
const cat = Object.create(animal);

const max = Object.create(dog);
max.name = 'Max';

const claire = Object.create(cat);
claire.name = 'Claire';
