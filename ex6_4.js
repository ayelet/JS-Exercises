// exercise 6.4 - Ayelet Danieli - Arrays
"use strict";
///////////////////////////////////////////

// 1. Create array containing jumps of acrobats, each 3 numbers representative 1 jumper.
// for example : [5,5,8,7,-1,5] represent 2 jumpers. (The -1 means that the jump not accept)
// 2. Create function “avgJumper” that return average for each jumper
// example : [6,6] (the -1 is not includes on average).
// 3. Create function “bestAvgJump” return the best avg jump from all jumpers.
// 4. Create function “bestJump” return the best jump.

let jumperScore = [5, 5, 8, 7, -1, 5, -1, -1, 7];

// Return an average of each jumper
let avgJumper = (arr) => {
  let avgJumper = [];
 
  for (let i = 0; i < arr.length; i += 3) {
    let temp = 0;
    let nJumps = 0;
    for (let j = 0; j < 3; j++) {
      if (arr[i + j] !== -1) {
        nJumps += 1;
        temp += arr[i + j];
      }
    }
    avgJumper.push(temp / nJumps);
  }
  return avgJumper;
};
console.log(" ----- Average Jumps: ")
let averageJumps = avgJumper(jumperScore);
console.log(averageJumps);

// Retrun the best avg jump from all jumpers

let bestAvgJump = (arr) => {
    let jumberScore = avgJumper(jumperScore)
    let best = 0;
    jumberScore.forEach(element => {
        if (element > best)
        best = element;
    });
    return best;
};
console.log(" ----- Best average Jump: ", bestAvgJump(jumperScore));


// Return the best jump ever
let bestJump = (arr) => {
    let bestJump = 0;
    arr.forEach(element => {
        if (element > bestJump)
        bestJump = element;
    })
    return bestJump;
};
console.log(" ----- Best Jump: ", bestJump(jumperScore));
