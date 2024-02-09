/* eslint-disable max-len */
"use strict";

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

let rec = new Rectangle(10, 5);
console.log(typeof Rectangle);         // function
console.log(rec instanceof Rectangle); // true
console.log(rec.constructor);          // [class Rectangle]
console.log(rec.getArea());            // 50

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduction() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  static isHuman(object) {
    return object instanceof Human;
  }
}

let seth = new Human('Seth', 33);
seth.introduction();
console.log(Human.isHuman(seth));
console.log(Human.isHuman(rec));

class Employee {
  constructor(name, title, id, department) {
    this.name = name;
    this.title = title;
    this.id = id;
    this.department = department;
    this.adminAccess = false;
  }

  hasAdminAccess() {
    let accessArray = ['Manager', 'VP', 'Director'];

    accessArray.forEach((title) => {
      if (this.title.includes(title)) {
        this.adminAccess = true;
      }
    });
  }

  displayEmployeeInfo() {
    console.log(`Name: ${this.name} \nTitle: ${this.title} \nID: ${this.id} \nDepartment: ${this.department} \nAdmin Access: ${this.adminAccess}`);
  }

  static isEmployee(object) {
    return object instanceof Employee;
  }
}

let mike = new Employee('Mike', 'VP of Engineering', 3871, 'Engineering');
mike.hasAdminAccess();
mike.displayEmployeeInfo();
console.log(Employee.isEmployee(mike));

const Animal = function(species) {
  this.species = species;
  return species;
};

Animal.prototype.sleep = function() {
  console.log(`The ${this.species} is sleeping`);
};

let lion1 = new Animal('Panthera leo');
lion1.sleep(); // TypeError

function Dog() {
}

function Pet(type) {
  if (type === 'dog') {
    return new Dog();
  } else if (type === 'lion') {
    return 'not a pet!';
  }
}

let dog = new Pet('dog');
let lion = new Pet('lion');
let cat = new Pet('cat');

console.log(typeof dog);
console.log(typeof lion);
console.log(typeof cat);

console.log(dog instanceof Dog);
console.log(dog instanceof Pet);
console.log(lion instanceof Pet);
console.log(cat instanceof Pet);

let str1 = new String("abc");
let str2 = String("abc");

console.log(str1 === str2); // => false
console.log(typeof str1, typeof str2);

function convertCase(letter) {
  return letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
}

let str = 'Naveed Fida';
//str = [1, 2, 3].map.call(str, convertCase).join(""); works
//str = str.map(convertCase).join(""); doesn't work
str = Array.from(str).map(convertCase).join("");
console.log(str);

function Foo(parm) {
  this.parm = parm;
}

Foo.bar = function(obj) {
  // omitted code
  return obj instanceof Foo;
};

Foo.prototype.qux = function() {
  // omitted code
  return this.parm + this.parm;
};

let foo = new Foo(10);
console.log(Foo.bar(foo));
console.log(typeof Employee);