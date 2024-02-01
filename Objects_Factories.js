/*
Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description

"Me Talk Pretty One Day was written by David Sedaris."

*/

function makeBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      console.log(`${this.title} was written by ${this.author}. I ${this.read ? 'have' : "haven't"} read it.`);
    },

    readBook() {
      this.read = true;
    }
  };
}

let book1 = makeBook("Mythos", "Stephen Fry", true);
let book2 = makeBook("Me Talk Pretty One Day", "David Sedaris");
let book3 = makeBook("Aunts aren't Gentlemen", "PG Wodehouse");

book1.getDescription();
book2.getDescription();
book3.getDescription();

console.log(book1.read);
console.log(book2.read);
console.log(book3.read);

book2.readBook();
console.log(book2.read);
book2.getDescription();
