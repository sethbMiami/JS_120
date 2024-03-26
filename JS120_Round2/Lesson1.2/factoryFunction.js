"use strict";

let book4 = {
  Title: 'Mythos',
  Author: 'Stephen Fry',

  getDescription() {
    return `${this.Title} was written by ${this.Author}.`;
  }
};

let book5 = {
  Title: 'Me Talk Pretty One Day',
  Author: 'David Sedaris',

  getDescription() {
    return `${this.Title} was written by ${this.Author}.`;
  }
};

let book6 = {
  Title: "Aunts aren't Gentlemen",
  Author: 'PG Wodehouse',

  getDescription() {
    return `${this.Title} was written by ${this.Author}.`;
  }
};


function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      let condition = this.read ? 'have' : "haven't";
      return `${this.Title} was written by ${this.Author}. I ${condition} read it.`;
    },

    readBook() {
      this.read = true;
    }
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

book1.getDescription();  // "Mythos was written by Stephen Fry."
book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"

let emptyObject = {
  empty: true,
};

let fullObject = {
  empty: false,
  functions: 3,
  properties: 3,

  test1() {
    return null;
  },

  test2() {
    return null;
  },

  test3() {
    return null;
  }
};

console.log(emptyObject);
console.log(fullObject);

let copiedObject = Object.assign({}, fullObject);
Object.assign(emptyObject, copiedObject);

console.log('--------------');
console.log(emptyObject);
console.log(fullObject);
console.log(copiedObject);
