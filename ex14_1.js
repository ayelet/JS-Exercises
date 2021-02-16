
// ex14_1.js - Ayelet Danieli - Debugging tools

function getSum(arr1, arr2){
    // const sum = 0;
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
    sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
    sum += arr2[i];
    }
    }
    getSum([1,2,3],[5,66,23]);


//     What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.

// ex14_1.js:6 Uncaught TypeError: Cannot read property 'length' of undefined
//     at getSum (ex14_1.js:6)
//     at ex14_1.js:13


// 2. Which debug method did you use to find the bug?

// 3. Explain the bug in your own words.
// Since object wasn't declared, debugger cannot know which object it is and wether or not it has a 'length' property
// + a missing ',' will fix it, 

// 4. Fix the code and submit it all.