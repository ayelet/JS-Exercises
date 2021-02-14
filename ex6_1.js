// exercise 6.1 - Ayelet Danieli - Array Numbers
"use strict";
///////////////////////////////////////////
let arrLength = 0;
let arrSum = 0;
let arrayMulti = 1;
const arr = [1, 7, 3, 0, -5, 7, 3, 9];
for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
    arrLength += 1;
    arrSum += arr[i];
    arrayMulti *= arr[i];
}

console.log("Length is", arrLength);
console.log("Sum is", arrSum);
console.log("Multi is", arrayMulti);


