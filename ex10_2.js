// ex10.2- Ayelet Danieli - Map vs. ForEach
console.log("\n************* Ex. 10.2 *************");
// 1. Write a function called doubleValues which accepts an
// array and returns a new array with all the values in the
// array passed to the function doubled.
let sidra1 = [1, 2, 3, 4, 5];
console.log("original values:", sidra1);
const doubleValues = (arr) => {
  let newArr = [];
  arr.map((item) => newArr.push(item * 2));
  return newArr;
};
console.log("double values:", doubleValues(sidra1));

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
const onlyEvenValues = (arr) => {
  let newArr = [];
  arr.map((item) => {
    if (item % 2 === 0) newArr.push(item);
  });
  return newArr;
};

console.log("only evens: ", onlyEvenValues(sidra1));

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.
const showFirstAndLast = (arr) => {
  let newArr = [];
  arr.forEach((element, index) => {
    if (
      (index === 0 || index === arr.length - 1) &&
      typeof element === "string"
    )
      newArr.push(element);
  });
  return newArr;
};

const showFirstAndLastWithMap = (arr) => {
  let arr1 = [];
  arr.map((p, index) => {
    if ((index == 0 || index === arr.length - 1) && typeof p === "string")
      arr1.push(p);
  });
  return arr1;
};
let sidra2 = ["Jerusalem", "Haifa", "Acco", 123];
console.log("original", sidra2);
console.log("only first and last if strings: ", showFirstAndLast(sidra2));
console.log("only first and last using map:", showFirstAndLastWithMap(sidra2));
// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

let isVowel = (c) => "aeiou".includes(c);
  

const vowelCount = (str) => {
  let vowels = [];
  let chars = str.toLowerCase().split("");
  chars.forEach((c) => {
    if (isVowel(c)) {
      if (c in vowels) vowels[c]++;
      else vowels[c] = 1;
    }
  });

  return vowels;
};
let someString = "aaavbdciidseoooo";
console.log('\n', someString, ", number of vowels:", vowelCount(someString));

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

const capitalize = (str) => {
     let chars = str.split();
     return chars.map(c =>    c = c.toUpperCase()).join();
    // 'l' & 0x5f = 'L
}
//TODO: later!


let str1 = "an uncapitalized string";
console.log('\n original string:', str1);
console.log('CAPITALIZED string: ', capitalize(str1));


// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.
const shiftLetters = (str) =>  {
    let chars = str.split('');
    let shifted = chars.map((c) => {
        return String.fromCharCode((c.charCodeAt(0) - 1));
    });
    return shifted.join("");
};

let str2 = 'Zodiac';
console.log('\nOriginal string: ', str2);
console.log('after shift: ', shiftLetters(str2));

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

let swapCase = (str) => {
    let swapStr = '';
    swapStr = str.split('');
    let swapped = swapStr.map((c, index) => {
        return index % 2 ===0 ? capitalize(c): c;
    });
    return swapped.join('');
}

let str3 = 'abcdefghijk';
console.log('\nOriginal string: ', str3);
console.log('after swapCase: ', swapCase(str3));