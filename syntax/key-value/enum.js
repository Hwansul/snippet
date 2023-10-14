const daysEnum = Object.freeze({
  monday: 0,
  tuesday: 1,
  wednesday: 2,
  thursday: 3,
  friday: 4,
  saturday: 5,
  sunday: 6
});

class Enum {
  constructor(...keys) {
    keys.forEach((key, i) => {
      this[key] = i;
    });
    Object.freeze(this);
  }

  *[Symbol.iterator]() {
    for (let key of Object.keys(this)) yield key;
  }
}

const daysEnum = new Enum(
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
);

const days = [...daysEnum]; // Array of the enum values as strings
