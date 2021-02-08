// exercise 4.2 - Ayelet Danieli - Grade checking -If/Else
'use strict';

let checkGrade= (num) => {
    let grade = '';
    if ((num > 0) && (num < 64))
        grade = 'F';
    else if (num < 69)
        grade = 'D';
    else if (num < 79)
        grade = 'C';
    else if (num < 89)
        grade = 'B';
    else if (num <= 100)
        grade = 'A';
    else
        grade = 'Invalid grade';
    
    return grade;
};
               
let input = prompt("Plese enter your grade");
input = parseInt(input);
let grade = checkGrade(input);
alert(`You have ${grade}`);


