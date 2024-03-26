"use strict";
const jsonData = require('./jsonData.json');

jsonData.forEach((obj) => console.log(obj.address));
// try {
//   // Attempt to parse user input
//   const object = JSON.parse(jsonData);
//   console.log(object);
// } catch (error) {
//   // Handle the error gracefully
//   console.error("Error parsing user input:", error);
// }
