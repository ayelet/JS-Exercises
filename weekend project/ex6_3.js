
// Ex6.3 - organize strings
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
console.log("*** ex 6.3 ***");
let longest = (str1, str2) => {
  // let arr = (str1+str2).split('');// + str2.split('');
  let uniStr = str1 + str2;
  let arr1 = uniStr.split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  let arr2 = arr1.filter((a, i) => arr1.indexOf(a) === i);
  console.log(arr2.join(""));
  // console.log([...uniStr].filter(a => a.indexOf(a) ===i));
};

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
// let b = "aabc";
// let a = "def";
longest(a, b); // -> "abcdefklmopqwxy"
