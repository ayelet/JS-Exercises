// Ex5.2 - String Repeat
// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

console.log("*** ex 5.2 - String repeat***");

let repeatStr = (n, str) => new Array(n).fill(str).join("");

console.log(repeatStr(6, "l"));
console.log(repeatStr(5, "Hello"));

