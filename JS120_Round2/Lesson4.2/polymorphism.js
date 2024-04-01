"use strict";

let todaysDate = new Date().toDateString();

console.log(todaysDate);

console.log({a: 4}.toString());
console.log([1,2,3].toString());

//polymorphism thru inheritance

class Transportation {
  move() {
  }

  startEngine() {
  }
}

class Car extends Transportation {
  startEngine() {
    return 'Insert and turn key';
  }
}

class Truck extends Transportation {
  startEngine() {
    return 'push start bay-bay';
  }
}

class Bicycle extends Transportation {
}

class Train extends Transportation {
  startEngine() {
    return 'light the coal!!';
  }
}

let types = [new Car(), new Truck(), new Bicycle(), new Train()];

types.forEach((type) => console.log(type.startEngine()));

//polymorphism thru ducktyping

class Programmer {
  work() {
    return 'coding, coding, coding';
  }
}

class Roofer {
  work() {
    return 'shingle, shingle, shingle';
  }
}

class Unemployed {
  work() {
    return 'wtf';
  }
}

class GarbageMan {
  work() {
    return 'trash, trash, trash';
  }
}

class Job {
  constructor(jobs) {
    this.jobs = jobs;
  }
  working() {
    this.jobs.forEach((job) => console.log(job.work()));
  }
}

let programmer = new Programmer();
let roofer = new Roofer();
let unemployed = new Unemployed();
let garbageman = new GarbageMan();

let workers = new Job([programmer, roofer, unemployed, garbageman]);

workers.working();