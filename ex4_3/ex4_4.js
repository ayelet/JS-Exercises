// exercise 4.3 - Ayelet Danieli - The winner takes it all
"use strict";
///////////////////////////////////////////

const boom = (n) => {
    let str1 = [];
  for (let i = 0; i <= n; i += 1) {
    let numberInString = i.toString();
    let newArr = numberInString.split("");
    if (newArr.includes("7")) numberInString = "Boom";
    str1.push(numberInString);
  }

  console.log(str1);
};

boom(100);
