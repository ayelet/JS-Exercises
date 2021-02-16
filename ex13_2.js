// ex13_1.js - Ayelet Danieli - Loops
"use strict";

// 1. Recreate the challenge from the exercise 6.3-
// looping_with_arrays ,but this time using a while loop.
// 2. Reflect on what solution you like better for this task: the
// for loop or the while loop?

const strLen = (arr) => {
    let len = arr.length;
    let lenArr =[];
    let i=0;
    while(len--) {
        lenArr.push(arr[i++].length);
    }
    return lenArr;
}

const arr = ["boo", "doooo", "hoo","ro"];
console.log(strLen(arr)); 