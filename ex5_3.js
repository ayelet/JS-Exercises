// exercise 5.3 - Ayelet Danieli - Password
"use strict";
///////////////////////////////////////////

// regular if / else
let check1 = (password) => {
  if (password.length >= 7) 
    return "Strong";
  else return "Weak";
};

// ternary operation
let check2 = (password) => (password.length >= 7 ? "Strong" : "Weak");

console.log(check1("12345678"));
console.log(check1("123456"));

console.log(check2("12345678"));
console.log(check2("123456"));

// console.log(check3('12345678'));
// console.log(check3('123456'));

//check4 : check if at least one charachter is uppercase
let check4 = (password) => {
  if (password.length >= 7) {
    if (password !== password.toLowerCase()) 
        return "Very Strong";
    return "Strong";
  }
  return "Weak";
};

console.log(" ** Checking No. 4 **");
console.log(check4("12345678a")); // strong
console.log(check4("12345678A")); // very strong
console.log(check4("123456789")); // strong
console.log(check2("123456")); //weak
console.log(check2("12345A"));  // weak
