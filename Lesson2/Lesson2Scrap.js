let myObject = { };

myObject[false] = "one";
myObject[7] = "two";
myObject[[1, 2, 3]] = "three";


console.log('1,2,3' in myObject);

console.log(Object.keys(myObject));                  // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
console.log(Object.getOwnPropertyNames(myObject));    // [ '7', 'false', '1,2,3', 'a-key', 'undefinedKey' ]
/*
myObject["false"]                     // "one"
myObject["7"]                         // "two"
myObject["1,2,3"]                     // "three"
*/

//function factory

function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    started: false,

    start() {
      this.started = true;
    },

    stop() {
      this.started = false;
    }
  };
}

let myCar = createCar('Volvo', 'XC-40', 2020);
console.log(myCar);
myCar.start();
console.log(myCar.started);

//prototype function

let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);

console.log(a.hasOwnProperty('foo')); // => true
console.log(b.hasOwnProperty('foo')); // => false

console.log(Object.getPrototypeOf(b));

//prototype inheritance

let c = {
  foo: 1,
  bar: 2,
};

let d = {};
Object.setPrototypeOf(d, c);
console.log(b.foo); // => 1

c.foo = 42;
console.log(d.foo); // => 42

c.baz = 12;
console.log(d.baz); // => 12

let e = {};
console.log(Object.getPrototypeOf(e));
console.log(Object.getPrototypeOf(e) === Object.prototype);
console.log(Object.prototype);

//iteration
let array = ['hello', 'you', 'me'];
let obj2 = {
  name: 'seth',
  girlfriend: 'emily',
  age: 33
};

for (let key in array) {
  console.log(array[key]);
}

for (let key in obj2) {
  console.log(obj2[key]);
}

let x = {
  foo: 1,
};

let y = Object.create(x);

let z = Object.create(y);

console.log(x.foo);
console.log(y.foo);
console.log(z.foo);

console.log(Object.getPrototypeOf(y));

Object.getPrototypeOf(z).foo = 5;
console.log(x.foo);
console.log(y.foo);
console.log(z.foo);

let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

let newFoo = foo.bind(obj);
newFoo();

let abc = { foo: 1, bar: 2 };
let pqr = Object.create(abc);
pqr.qux = 3;
pqr.bar = 4;

console.log(abc.hasOwnProperty('qux'));