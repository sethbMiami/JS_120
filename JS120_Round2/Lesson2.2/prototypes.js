let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);
console.log(b.foo); // => 1

console.log('foo' in b);
console.log('foo' in a);
console.log(a.hasOwnProperty('foo'));
console.log(b.hasOwnProperty('foo'));

console.log(Object.keys(a));
console.log(Object.keys(b));
