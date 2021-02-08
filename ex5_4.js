// exercise 5.4 - Ayelet Danieli - Dark or Light
"use strict";
///////////////////////////////////////////

let checkColor = (color) => {
  let output = "";
  switch (color.toLowerCase()) {
    case "yellow":
    case "orange":
    case "pink":
      output = "light color";
      break;
    case "blue":
    case "purple":
    case "brown":
      output = "dark color";
      break;
    default:
      output = "unknown color";
  }

  return output;
};

let colors = ['orange', 'pink', 'red', 'black', 'purple', 'white', 'yellow', 'brown', 'blue', 'violet'];

colors.forEach(function(color) {
console.log(color, ':', checkColor(color))});
