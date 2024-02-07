/* eslint-disable max-len */
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);

/*
Suppose that we want to extract getDescription from turk, but we always want it
to execute with turk as its execution context. How would you modify your code to do that?
*/

let displayTurk = turk.getDescription.bind(turk);
logReturnVal(displayTurk);

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this;
//     self.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    },this);
  }
};

TESgames.listGames();

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach((title) => {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

let foo = {
  a: 0,
  incrementA: function() {
    //let self = this;
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};
console.log(foo.a);
//foo.incrementA.bind(foo);
foo.incrementA();
console.log(foo.a);

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);

let newObject = Object.create(foo);
console.log(Object.getPrototypeOf(newObject));
console.log(Object.getPrototypeOf(foo));

let foo2 = {
  bar: 42,
  qux() {
    console.log("Pudding");
  },
};

let baz = Object.create(foo2);
baz.qux();
