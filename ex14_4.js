// ex14_4.js - Ayelet Danieli - Debugging tools

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it
// down.
a) var sum; 
b) average = sum / length
// 2. Which debug method did you use to find the bug?
debug console + breakpoint on sum
// 3. Explain the bug in your own words.
sum is not initialized to 0 (also should not be global)
// 4. Fix the code and submit it all.

function calcAverage(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);
