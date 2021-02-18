// Ex6.1 - Mumbling
// This time no story, no theory. The examples below show you how to write function
// accum :
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z .
console.log("*** ex 6.1 - Mumbling ***");

let accum = (str) => {
  let str1 = [...str].map(
    (a, i) => a.toUpperCase() + new Array(i).fill(a.toLowerCase()).join("")
  );
  console.log(str1.join("-"));
};

accum("abcd"); // -> "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
accum("cwAt"); // -> "C-Ww-Aaa-Tttt"
