/* eslint-disable no-extend-native */
"use strict";

let sample = [1, 2, 3];

Array.prototype.first = function() {
  return this[0];
};

console.log(sample.first());

Array.prototype.last = function() {
  return this[this.length - 1];
};

console.log(sample.last());

let sampleString = "hello what are you";

let doesThisWork = Array.prototype.map.call(sampleString, char => char + "1").join('');

console.log(doesThisWork);

let filterString = Array.prototype.filter.call(sampleString, char => char !== 'l').join('');

console.log(filterString);