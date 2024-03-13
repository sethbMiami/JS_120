/* eslint-disable max-lines-per-function */
//"use strict";

let mechanic = {
  name: "Seth",

  fixcar(car) {
    car.status = "fixed";
  }
};

let racecar = {
  model: "Mercedes",
  fuel: 0.5,
  engineOn: false,
  status: "broke",
  mechanic: mechanic.name,

  startEngine() {
    this.engineOn = true;
  }
};


racecar.startEngine();
console.log(racecar.engineOn);
console.log(mechanic.name);
console.log(racecar.status);
mechanic.fixcar(racecar);
console.log(racecar.status);
console.log(racecar.mechanic);

function createCar(make, fuelLevel, engineOn) {
  // To be implemented by you.
    return {
      make: make,
      fuelLevel : fuelLevel,
      engineOn: engineOn,

      startEngine() {
        this.engineOn = true;
      },

      drive() {
        this.fuelLevel -= 0.1;
      },

      stopEngine() {
        this.engineOn = false;
      },

      refuel(percent) {
        if ((this.fuelLevel + (percent / 100)) <= 1) {
          this.fuelLevel += (percent / 100);
        } else {
          this.fuelLevel = 1;
        }
    }
  };
}

let raceCar1 = createCar('BMW', 0.5, false);
raceCar1.drive();

let raceCar2 = createCar('Ferrari', 0.7, true);
raceCar2.drive();

let jaguar = createCar('Jaguar', 0.4, false);

console.log(raceCar1.make);
console.log(raceCar2.make);
console.log(jaguar.make);


let cat = {
  name: "Butterscotch",
  age: 13,
  func: function() { console.log('Hello') }
};

cat.func();

num = 5;
function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};

logNum.call(obj); // logs 42
logNum();