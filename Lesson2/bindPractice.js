/* eslint-disable max-len */
function sumNum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

let sumNum2 = sumNum.bind(obj);
console.log(sumNum2(5)); // => 47

/*
Practice Problems for bind:

Bind Method to an Object:
Define a function printName that takes a name parameter and logs "Hello, {name}!".
Use the bind method to create a new function sayHello that is bound to the person object,
where person has a name property.

Partial Function Application with Bind:
Create a function createGreeter that takes a greeting parameter and returns a function.
The returned function should take a name parameter and log the concatenated greeting message
(e.g., "Good morning, {name}!"). Use the bind method to bind the greeting parameter to the returned function.
*/
function printName() {
  console.log(`Hello ${this.name}`);
}

let person = {
  name: 'Seth'
};

let sayHello = printName.bind(person);

sayHello();

function createGreeter(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  };
}

let greetMorning = createGreeter('Good Morning');

greetMorning('Seth');
/*
Practice Problems for call:

Invoke Method with Call:
Define an object person with properties name and age, and a method introduce that logs a
greeting message with the person's name and age. Use the call method to invoke the introduce
method with a different object with the same properties.

Use Call to Borrow Methods:
Define two objects cat and dog with a sound property and a method makeSound that logs the
sound of the animal. Use the call method to invoke the makeSound method of the cat object with
the dog object as the context.

Practice Problems for apply:

Apply Method with Math Functions:
Use the Math.max function to find the maximum number from an array of numbers. Write a function findMax that takes an array of numbers as an argument and uses the apply method to apply the Math.max function to the array.

Dynamic Function Invocation with Apply:
Create a function invokeFunction that takes a function fn and an array args. The invokeFunction function should invoke the fn function with the provided args array using the apply method.
*/