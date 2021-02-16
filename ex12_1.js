// ex12_1.js - Ayelet Danieli - Reduce.


// Write the following functions using the reduce built-in function.
// 1. max
// 2. sum of even numbers
// 3. average

let arr = [12, -13, 23, 21, 25, 1, 4, 5, 10];

let max = (arr) => { return arr.reduce((a,b) => a > b ? a : b)};
let sumEvens = (arr) => { return arr.reduce((a,b) => (a%2===0?a:0) + (b%2===0?b:0) )} ;
let average= (arr) => { return arr.reduce((a,b, i, array) => a += b/array.length)};
console.log(max(arr));
console.log(sumEvens(arr));
console.log(average(arr));