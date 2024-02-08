/* eslint-disable max-lines-per-function */
function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    describe() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);
    },

    setPrice(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        console.log('Price is invalid');
      }
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(1, 'Cordless Drill', 15, 45);
let hammer = createProduct(2, 'Hammer', 13, 25);
let tapeMeasure = createProduct(3, 'Tape Measure', 6, 15);

scissors.describe();
drill.setPrice(55);
drill.describe();
hammer.describe();
tapeMeasure.describe();
