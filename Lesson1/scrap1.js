/* eslint-disable max-len */
//"use strict";

function foo() {
  console.log("this refers to: " + this);
}

foo();
// this refers to: [object global]
let start = -2;
let stop = 10;

let array = Array. from( { length: ((stop + 1) - start) }, (value, index) => start + index * 1 );

console.log(array);

let quickArray = [...Array(11).keys()].slice(1);

console.log(quickArray);

let foo2 = {
  bar: function() {
    console.log(this);
  }
};

foo2.bar(); // `foo` is the implicit execution context for `bar`
// { bar: [Function: bar] }

let baz = foo2.bar;

baz();

function logNum() {
  console.log(this.num, this.name);
}

let obj = {
  num: 42,
  name: 'seth'
};

logNum.call(obj); // logs 42

function sumNum(num1) {
  return this.num + num1;
}
let addArray = [1, 4, 7, 9];

obj.num = sumNum.call(obj, 5);
logNum.call(obj); // logs 42

let foo3 = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

console.log(bar.add.call(foo3));

let foo4 = { bar: 1, xyz: 3 };
let baz4 = Object.create(foo);
baz4.qux = "Why not?";

console.log(Object.keys(baz4).toString());
for (let prop in baz4) {
  if (baz4.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

Object.keys(baz4).forEach(prop => console.log(prop));

Object.keys(baz4).forEach(prop => {
  if (baz4.hasOwnProperty(prop)) {
    console.log(prop);
  }
});

console.log(Object.getPrototypeOf({ a: 1, b: 2 }));
console.log(Object.prototype);