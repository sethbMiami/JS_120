/* eslint-disable max-len */
"use strict";

//factory function

function createCar(make, model) {
  return {
    make,
    model,
    engine: false,

    start() {
      this.engine = true;
    }
  };
}

let myCar = createCar("volvo", "xc-40");
console.log(myCar);
console.log(typeof myCar);
console.log(Object.getPrototypeOf(myCar));

// constructor

function CreateCar(make, model) {
  if (!(this instanceof CreateCar)) {
    return new CreateCar(make, model);
  }
  this.make = make;
  this.model = model;
}

let dreamCar = new CreateCar("mercedes", "G-wagon");
console.log(dreamCar);
console.log(typeof dreamCar);
console.log(Object.getPrototypeOf(dreamCar));
console.log(dreamCar.constructor);

//omit new keyword when invoking a constructor turns it into a factory function and returns undefinned.
let noNew = CreateCar('fake', 'car');
console.log(noNew);

// Delete DogPrototype

function Dog(name, breed, weight) {
  Object.setPrototypeOf(this, Dog.myPrototype);
  // rest of the code
}

Dog.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
};

console.log(Dog);

let stringString = 'Im a string';
let objectString = new String('Im an object');

console.log(stringString, objectString);
console.log(typeof stringString, typeof objectString);

let extractString = String.prototype.valueOf(objectString);
console.log(extractString, typeof extractString);
