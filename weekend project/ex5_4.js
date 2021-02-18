// Ex5.4 - To Weird Case
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased. The indexing just explained is zero based, so the zero-ith
// index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
console.log("*** ex 5.4 - toWeirdCase ***");

let toWeirdCase = (str) => {
  let str1 = "";
  for (let i = 0; i < str.length; i++)
    str1 += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
  console.log(str1);
};
toWeirdCase("String"); //=> returns "StRiNg"
toWeirdCase("Weird string case"); //=> returns "WeIrD StRiNg CaSe"

