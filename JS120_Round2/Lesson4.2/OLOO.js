"use strict";

let carPrototype = {
  start: function() {
    this.started = true;
  },

  stop: function() {
    this.started = false;
  },

  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
};

let personPrototype = {
  walking() {
    this.isWalking = true;
  },

  sleeping() {
    this.isSleeping = true;
  },

  init(name, age) {
    this.name = name;
    this.age = age;
    this.isWalking = false;
    this.isSleeping = false;
    return this;
  }
};

let seth = Object.create(personPrototype).init('seth', 33);

console.log(seth);
seth.walking();
console.log(seth.isWalking);