let emptyArray = new Array(1, 2, 3, 4);
console.log(emptyArray);

console.log(Array.prototype);

let newArray = Array.from({0: 1, 1: 2, 2: 3, length: 3});

console.log(Object.keys(newArray));
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype);

let sethBirthDay = new Date('December 28 1990 11:37 am');
console.log(sethBirthDay.getMonth());
console.log(sethBirthDay.getFullYear());
//builtIn_feature
console.log(sethBirthDay.toDateString());

let stringObject = new String('Hello');
console.log(stringObject);
console.log(typeof stringObject);

Array.prototype.first = function() {
  return this[0];
};

console.log(newArray.first());

