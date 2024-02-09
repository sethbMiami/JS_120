/* eslint-disable max-len */
// since the only copy of the function is on the prototype, each instance of Dog will not
//require much memory. The prototype becomes a property of the Constructor

function Dog(name, breed, weight) {
  // rest of the code
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  Dog.allDogs.push(this);
}

Dog.allDogs = [];


Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

Dog.prototype.bite = function() {
  console.log(`You were bit by ${this.name}!`);
};


let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);
maxi.bark(); // 'Woof!'

maxi.hasOwnProperty('bark'); // false
dexter.hasOwnProperty('bark'); // false
biggie.hasOwnProperty('bark'); // false
// console.log(Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark); // true
// console.log(Object.getPrototypeOf(dexter).bark === Dog.myPrototype.bark); // true
// console.log(Object.getPrototypeOf(biggie).bark === Dog.myPrototype.bark); // true
console.log(Dog.prototype.bark);
console.log(Dog.prototype.bite);
console.log(Dog.prototype.constructor);

biggie.bite();


if (maxi.constructor === Dog) {
  console.log("It's a dog");
} else {
  console.log("It's not a dog");
}

dexter.bark = function() {
  console.log('WOOF!');
};

biggie.bark();
dexter.bark();
console.log(dexter);
console.log(biggie);
console.log(biggie.__proto__);
console.log(Dog.prototype);
console.log(biggie.__proto__ === Dog.prototype);
console.log(Dog.prototype.constructor);

let objLiteral = {
  type: 'Object',
};

console.log(objLiteral.__proto__);

Dog.species = "Canis lupus";
console.log(Dog.species);
console.log(Dog.allDogs);