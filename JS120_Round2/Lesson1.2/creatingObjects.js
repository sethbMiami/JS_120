"use strict";

//object literal

let seth = {
  name: 'seth',
  age: 34,
  sex: 'male',

  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

let emily = {
  name: 'emily',
  age: 27,
  sex: 'female',

  intro: function() {
    //works
    const newIntro = () => console.log(`Hi my name is ${this.name}`);
    //doesn't work
    // function newIntro() {
    //   console.log(`Hi my name is ${this.name}`);
    // }
    newIntro();
  }
};

seth.introduce();
seth.introduce.call(emily);
emily.intro();