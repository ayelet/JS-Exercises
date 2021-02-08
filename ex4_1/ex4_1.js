// exercise 4.4 - Ayelet Danieli - Num of Siblings -If/Else
'use strict';
// var readlineSync = require('readline-sync');


let input = prompt("How many siblings?");
let message = ``;
input = parseInt(input);
if (input === 1) {
    message = `1 sibling`;
    
} else if (input > 1) {
    message = `more than 1 sibling`;
} else {
    message = "No siblings";
}

alert(message);

// We used triple equation for strong evaluation, this way we make sure that user has entered a number

