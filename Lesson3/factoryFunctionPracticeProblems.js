/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}

/*
It returns an invoice object, with phone and internet properties, and a total method.
The default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!).
The function takes an object argument whose attributes override the default values.
*/

function createInvoice(services) {
  // implement the factory function here
  let obj = {
    phone: 3000,
    internet: 5500,
    paid: 0,

    total() {
      return this.phone + this.internet;
    },

    addPayment(payment) {
      this.paid += paymentTotal([payment]);
    },

    addPayments(payments) {
      this.paid += paymentTotal(payments);
    },

    amountDue() {
      return this.total() - this.paid;
    }
  };

  return services ? Object.setPrototypeOf(services, obj) : obj;
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));
// invoices.forEach((obj) => {
//   for (let prop in obj) {
//     console.log(obj[prop]);
//   }
// });
console.log(invoiceTotal(invoices)); // 31000

function createPayment(services) {
  // implement the factory function here
  let payObj = {
    phone: 0,
    internet: 0,
    amount: 0,

    total() {
      return this.amount ? this.amount : this.phone + this.internet;
    }
  };

  return services ? Object.setPrototypeOf(services, payObj) : payObj;

}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));
// payments.forEach((obj) => {
//   for (let prop in obj) {
//     console.log(obj[prop]);
//   }
// });
//console.log(payments);
console.log(paymentTotal(payments));      // => 24000

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0