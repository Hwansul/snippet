/**
 * Instead of creating a key name and then writing function () {},
 * you can add a named function without the function keyword.
 */

let wizard = {
  // The old way of adding functions
  summon: function () {
    console.log("From out of thin air, watch me make a bear");
  },

  // The ES6 shorthand way
  vanish() {
    console.log(`Now you see me, now you don't.`);
  },
};
