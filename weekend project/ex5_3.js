// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
console.log("*** ex 5.3 - toCamelCase ***");

let toCamelCase = (str) => {
  let arr = [];
  if (str.includes("-")) arr = str.split("-");
  else if (str.includes("_")) arr = str.split("_");
  else return str;
  let newArr = arr.slice(1).map((a) => a[0].toUpperCase() + a.slice(1));
  console.log(arr[0] + newArr.join(""));
};
toCamelCase("the-stealth-warrior"); // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior"); // returns "TheStealthWarrior"

