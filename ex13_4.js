// ex13_4.js - Ayelet Danieli - steps.

// Write a function that has one argument, a positive integer.
// Lets call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right hand side if empty!

let steps = (n) => {
  let str = "";
  let i = 0,
    j = n - i;
  for (let k = 1; k <= n; k++) {
    for (i = 1; i <= n; i++) {
      str += (i < k ) ? "#" : '_';

    }
    str += `\n`;
  }
  console.log(str);
};
// let steps = (n) => {
//   let str = "";
//   let i = 0,
//     j = n - i;
//   for (let k = 0; k < n; k++) {
//     for (i = 0; i < k; i++) {
//       str += "#";
//     }
//     for (j = k; j < n; j++) str += "0";
//     str += "\n";
//   }
//   console.log(str);
// };

steps(5);
