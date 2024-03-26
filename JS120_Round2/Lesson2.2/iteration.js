"use strict";

let objectA = {
  name: 'stan',
  logo: 'ms',
  lego: 0,
};

console.log(Object.getPrototypeOf(objectA));
let objectB = Object.create(objectA);
console.log(objectB.name);
objectB.new = "object B property";
console.log(objectB);

for (let key in objectB) {
  console.log(key, objectB[key]);
}
console.log('----------');

console.log(Object.keys(objectB));
console.log('----------');

for (let key in objectB) {
  if (objectB.hasOwnProperty(key)) {
    console.log(key, objectB[key]);
  }
}
console.log(objectB['notHere']);

let a = {
  foo: 1,
};

let b = Object.create(a);
b.foo = 2;

let c = Object.create(b);
console.log(c.foo);

let object = c;
console.log('----------');

while (true) {
  if (object) {
    console.log(Object.getPrototypeOf(object));
    object = Object.getPrototypeOf(object);
  } else {
    break;
  }
}

console.log(a.toString());

class TestThis {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return this;
  }
}

class subTestThis extends TestThis {
  constructor(name, extra) {
    super(name);
    this.extra = extra;
  }

  getParent() {
    return Object.getPrototypeOf(this);
  }
}

let prime = new TestThis('prime');
console.log(prime.toString());

let subPrime = new subTestThis('subPrime', 'random');
console.log(subPrime.toString());
console.log(subPrime instanceof TestThis);
console.log(subPrime instanceof subTestThis);
console.log(Object.getPrototypeOf(subPrime));
console.log(subPrime.getParent());