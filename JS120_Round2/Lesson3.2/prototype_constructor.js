"use strict";


function Dog(name, breed, weight) {
  // deleted Object.setPrototypeOf(this, Dog.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
maxi.bark(); // 'Woof!'

let biggie = new Dog('Biggie', 'Whippet', 9);
biggie.bark(); // 'Yip!'

console.log(Dog.prototype);
console.log(Dog.prototype.constructor);

console.log(Object.getPrototypeOf(maxi));
console.log(maxi.constructor);
console.log(maxi.constructor === Dog, 'here');
console.log(maxi instanceof Dog);
console.log(Dog.constructor);
console.log(Object.getPrototypeOf(Dog));

class Person {

  static personsCreated = [];

  constructor(name, age) {
    this.name = name;
    this.age = age;
    Person.personsCreated.push(this);
  }

  static allPersons() {
    return Person.personsCreated;
  }
}

let person1 = new Person('seth', 34);
let person2 = new Person('may', 41);
let person3 = new Person('kai', 3);

let allPersons = Person.allPersons();

allPersons.forEach((person) => console.log(person.name, person.age));

const emptyArray = new Array(4);

emptyArray.push('yes');
emptyArray.push('no');
emptyArray[0] = 'interesting';


emptyArray.forEach((empty, idx) => {
  if (empty) {
    console.log(empty, idx);
  } else {
    console.log('superEmpty');
  }
});
console.log(emptyArray);

let fillArray = new Array(5).fill('seth');
console.log(fillArray);

console.log(Person.allPersons.toString());
console.log(Dog.toString());
let randObj = {a: 1, b: 2};
console.log(randObj.toString());

for (let [key, value] of Object.entries(randObj)) {
  console.log(key, value);
}

console.log(Dog.prototype.constructor === Dog);