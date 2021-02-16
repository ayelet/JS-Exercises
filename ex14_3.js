// ex14_3.js - Ayelet Danieli - Debugging tools

// 1. First find the line that contains the problem. Write it down.
return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];

// 2. Which debug method did you use to find the bug?
debug console (node js) + breakpoint

// 3. Explain the bug in your own words.
a)range of array is [0..9], arr[10] is undefind (out of range)
b) even numbers are shifted by 1 (Since array count starts at 0)
// 4. Fix the code and submit it all.

// we want to sum all numbers in even cells in arrays of size 10:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30


function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
    }
    getSumOfEven([1,2,3,4,5,6,7,8,9,10,]);
    // console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10,]));