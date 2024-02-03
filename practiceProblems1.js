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

function assignProperty(object, key, value) {
  if (key in object) {
    if (!object.hasOwnProperty(key)) {
      let parent = Object.getPrototypeOf(object);
      assignProperty(parent, key, value);
    }
    object[key] = value;
  }
}
//console.log('bar' in fooA);

let noObject = Object.create(null);
console.log(noObject);
let check = Object.getPrototypeOf(noObject);
console.log(check);