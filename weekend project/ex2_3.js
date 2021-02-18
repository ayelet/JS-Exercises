// Ex2.3 - Find the Next Perfect Square
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is
// also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the
// parameter is positive.
// Examples:
// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

console.log("*** ex 2.3 ***");
const findNextSquare = (number) => {
  if (Math.floor(Math.sqrt(number)) < Math.sqrt(number)) return -1;
  let next = Math.floor(Math.sqrt(number)) + 1;
  return Math.pow(next, 2);
};
console.log(findNextSquare(121)); //144
console.log(findNextSquare(625)); // 676
console.log(findNextSquare(114)); //-1

