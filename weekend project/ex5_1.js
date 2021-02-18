//   Ex5.1 - trimming string
//   It's pretty straightforward. Your goal is to create a function that removes the first and last
//   characters of a string. You're given one parameter, the original string. You don't have to worry
//   with strings with less than two characters.
console.log("*** ex 5.1 ***");

let trimStr = (str) => {
  return str.slice(1, -1);
};

console.log(trimStr("hello")); //ell
console.log(trimStr("yaba daba doo")); //aba daba do
console.log(trimStr("iamastring")); //amastrin

