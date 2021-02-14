// ex9.2 - Ayelet Danieli - Callbacks

// Use the array of numbers below and answer the following
// questions:
const numbers = [1, -5, 666, 2, 400, 11];
// 1. Sort the array of numbers from descending to ascending
// order

let ascending = (a, b)  => { return a-b; }
console.log(numbers.sort(ascending));
// 2. Sort the array of numbers from descending to ascending
// order.
let descending = (a, b) => { return b-a; }
console.log(numbers.sort(descending));