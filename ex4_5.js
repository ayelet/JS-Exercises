// exercise 4.5 - Ayelet Danieli - LeapYear
"use strict";
///////////////////////////////////////////

// isLeap - Takes a year for an argument and return true is
// year is leap year and false if not

let isLeap = (n) => {
  let year = n;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 == 0) 
        return true;
      return false;
    }
    return true;
  } else {
    return true;
  }
};

// printLeap - checks if year is leap and prints a message to the console
let printLeap = (n) => {
  if (isLeap(n)) 
    console.log(n, ": It is indeed a leap year");
  else console.log(n, ": This is not a leap year");
};

let n = [2012, 2100, 2400];
n.forEach(function (item) {
  printLeap(item);
});
