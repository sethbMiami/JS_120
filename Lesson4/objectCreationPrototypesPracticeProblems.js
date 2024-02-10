"use strict";
/* eslint-disable max-len */
//Use a factory function to create pet objects. The factory should let us create and use pets like this:
function createPet1(animal, name) {
  return {
    animal,
    name,

    sleep() {
      console.log('I am sleeping');
    },

    wake() {
      console.log('I am awake');
    },
  };
}

let pudding1 = createPet1("Cat", "Pudding");
console.log(`I am a ${pudding1.animal}. My name is ${pudding1.name}.`);
pudding1.sleep(); // I am sleeping
pudding1.wake();  // I am awake

let neptune1 = createPet1("Fish", "Neptune");
console.log(`I am a ${neptune1.animal}. My name is ${neptune1.name}.`);
neptune1.sleep(); // I am sleeping
neptune1.wake();  // I am awake

let PetPrototype = {
  sleep: function() {
    console.log('I am sleeping');
  },

  wake: function() {
    console.log('I am awake');
  },

  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  }
};

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake