/* eslint-disable max-len */
/*
1. Create a Basic Object Factory:
Define a function createPerson that takes name, age, and gender as parameters
and returns an object representing a person with those properties.
*/

function createPerson1(name, age, gender, dating) {
  return {
    name,
    age,
    gender,
    dating
  };
}


/*
2. Enhance Object Factory with Methods:
Modify the createPerson function from problem 1 to include a method greet that
logs a greeting message with the person's name.
*/

function createPerson(name, age, gender) {
  return {
    name,
    age,
    gender,

    greet() {
      console.log(`Hi, my name is ${this.name}.`);
    }
  };
}

let Emily = createPerson('Emily', 26, 'Female');
let Seth = createPerson1('Seth', 33, 'Male', Emily);
console.log(Seth);
Emily.greet();

/*
3. Extend Object Factory with Inheritance:
Define a function createStudent that extends the createPerson factory from problem 2.
The createStudent function should add a grade property and a method study that logs a
message indicating the person is studying.
*/

function createStudent(name, age, gender, grade) {
  const person = createPerson(name, age, gender);

  return Object.assign({}, person, {
    grade,
    studying: false,

    study() {
      console.log(`This person is ${this.studying ? '' : 'not '}studying`);
    }
  });
}

let Kai = createStudent('Kai', 3, 'Male', 'B');
Kai.greet();
Kai.study();
Kai.studying = true;
Kai.study();

/*
4. Object Factory with Custom Properties:
Define a function createCar that takes make, model, and year as parameters and
returns an object representing a car with those properties. Additionally,
include a method drive that logs a message indicating the car is being driven.
*/

function createCar(make, model, year, owner) {
  return {
    make,
    model,
    year,
    owner,

    drive() {
      console.log('This car is driving');
    },

    printOwner() {
      console.log(`${this.owner.name} is the owner of this car.`);
    }
  };
}

let SethsCar = createCar('Volvo', 'XC-40', 2020, Seth);

console.log(SethsCar);
SethsCar.printOwner();
console.log(SethsCar.owner.age);
console.log(SethsCar.owner.dating.name);
SethsCar.owner.dating.greet();
/*
5. Advanced Object Factory with Composition:
Define a function createAddress that returns an object representing an address. Then,
create a function createPersonWithAddress that takes name, age, gender, and address as
parameters and returns a person object with the provided properties, including an address
object as a nested property.
*/

function createAddress(number, street, city, state) {
  return {
    number,
    street,
    city,
    state,

    printAddress() {
      console.log(`I live at ${number} ${street} ${city} ${state}`);
    }
  };
}

function createPersonWithAddress(name, age, gender, address) {
  const person = createPerson(name, age, gender);
  person.Address = createAddress(address[0], address[1], address[2], address[3]);

  return person;
}

let sethWithAddress = createPersonWithAddress('Seth', 33, 'Male', [2721, 'SW 117th CT,', 'Miami', 'FL']);

console.log(sethWithAddress.Address.state);