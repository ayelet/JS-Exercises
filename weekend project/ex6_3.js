
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
console.log("*** ex 6.3 - Organize strings***");
let longest = (str1, str2) => {
  let organizedStr = Array.from(new Set([...str1+str2])).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('');
  console.log(organizedStr);
};

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";
longest(a, b); // -> "abcdefklmopqwxy"
let a1 = "deefag";
let b1 = "aabc";
longest(a1, b1); // -> "abcdefg"
