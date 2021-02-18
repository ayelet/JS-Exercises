// Ex2.4 - Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

console.log("*** ex 2.4 ***");

const findUniq = (arr) => {
  arr.sort((a, b) => a - b);
  if (arr[0] !== arr[1])
    if (arr[1] !== arr[arr.length - 1]) return arr[arr.length - 1];
    else return arr[0];
  else return arr[arr.length - 1];
};

console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55

