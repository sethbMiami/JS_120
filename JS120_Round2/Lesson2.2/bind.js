"use strict";


let object1 = {
  foo: "object1",

  object1Method() {
    return this.foo;
  }
};

let object2 = {
  foo: "object2",
};

let newObjectMethod = object1.object1Method.bind(object2);

console.log(newObjectMethod());
console.log(object1.object1Method());
console.log(newObjectMethod.call(object1));

let callMethod = object1.object1Method.call(object2);
console.log(typeof callMethod, callMethod);

let foo = {
  a: 0,
  incrementA: function() {
    let arrow = () => {
      this.a += 1;
    };

    arrow();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);