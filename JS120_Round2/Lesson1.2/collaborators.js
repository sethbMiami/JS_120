let pete = {
  heroes: ['Superman', 'Spiderman', 'Batman'],
  cash: { ones: 12, fives: 2, tens: 0, twenties: 2, hundreds: 0 },

  cashOnHand() {
    //math is wrong
    return Object.values(this.cash).reduce((acc, curVal) => acc + curVal);
  },

  allHeroes() {
    return this.heroes.join(', ');
  },
};

console.log(pete.allHeroes());
console.log(pete.cashOnHand());

let emily = {
  name: 'emily',
  age: 27,
  love: null,

  intro() {
    return `Hi, my name is ${this.name}!`;
  }
};

let seth = {
  name: 'seth',
  age: 34,
  love: emily,

  intro() {
    return `Hi my name is ${this.name} and I am in love with ${this.love.name}. She is ${this.age - this.love.age} years younger than me`;
  }
};

//collaborator object
function findLove(object) {
  return `Hi, I'm ${this.name} and I secretely love ${object.name}`;
}

console.log(seth.intro());
console.log(emily.intro());
let newIntro = findLove.bind(emily);
console.log(newIntro(seth));
