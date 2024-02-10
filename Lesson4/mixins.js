'use strict';

//mixins with inheritance

const Swimmable = {
  swim() {}
};

class Bird {}

class FlyingBird extends Bird {
  fly() {}
}

class Stork extends FlyingBird {}

class Parrot extends FlyingBird {}

class Penguin extends Bird {}
Object.assign(Penguin.prototype, Swimmable);

class Ostrich extends Bird {}
Object.assign(Ostrich.prototype, Swimmable);

class Duck extends FlyingBird {}
Object.assign(Duck.prototype, Swimmable);

class Goose extends FlyingBird {}
Object.assign(Goose.prototype, Swimmable);

//mixins only

const Swimmable1 = {
  swim() {}
};

const Flyable1 = {
  fly() {}
};

class Stork1 {}
Object.assign(Stork1.prototype, Flyable1);

class Parrot1 {}
Object.assign(Parrot1.prototype, Flyable1);

class Penguin1 {}
Object.assign(Penguin1.prototype, Swimmable1);

class Ostrich1 {}
Object.assign(Ostrich1.prototype, Swimmable1);

class Duck1 {}
Object.assign(Duck1.prototype, Swimmable1, Flyable1);

class Goose1 {}
Object.assign(Goose1.prototype1, Swimmable1, Flyable1);