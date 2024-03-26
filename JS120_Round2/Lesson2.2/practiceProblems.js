/* eslint-disable max-len */
"use strict";

/*
What will the following code log to the console? Explain why it logs that value.
Try to answer without running the code.
*/

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// console.log(baz.foo + qux.foo);

//the console will log 2. This is because object baz inherits from object qux, even though it is a delegate, it can still
//access the value 1 thru dot notation, so the expression evaluates to 1 + 1;

function assignProperty(object, property, value) {
  while (true) {
    if (object) {
      if (object.hasOwnProperty(property)) {
        object[property] = value;
        break;
      } else {
        object = Object.getPrototypeOf(object);
      }
    } else {
      break;
    }
  }
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

let parentFoo = {
  a: 'parent',
  b: 'parent',
  c: 'parent',
};

let foo = {
  d: 'foo',
  e: 'foo',
  f: 'foo',
};

Object.setPrototypeOf(foo, parentFoo);

for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

console.log('-------------');

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});


let objectNull = Object.create(null);
console.log(objectNull);

if (Object.getPrototypeOf(objectNull)) {
  console.log("Has a prototype");
} else {
  console.log('Does not have a prototype');
}
console.log(Object.getPrototypeOf(objectNull));

function declaration() {
  console.log("I'm a function declaration and I can be hoisted");
}

let functionExpressionn = function() {
  console.log("I'm a function expression");
};

let arrowFunctionn = () => console.log("I'm an arrow function");

declaration();
functionExpressionn();
arrowFunctionn();

let numbers = [1, 2, 3, undefined, null];
let squaredNums = numbers.map(function squareThis(num) {
  return num * num;
});

console.log(squaredNums);
