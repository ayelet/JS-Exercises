// ex7.5 - Ayelet Danieli - Arrays and objects

// Create a function that takes one argument, an array.
// Use this array:
// const array = ["Hello", "Good Day", "Your Welcome", "hotdog",
// "hamburgers"];

// to count over all the letters and return an object with the
// letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c:
// 1, m: 2, t: 1, b: 1, s: 1 }

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
let countLetters = (array) => {
  let letterMap = new Object();
  array.forEach((word) => {
    word.toLowerCase();
    let wordArr = word.toLowerCase().replace(/\s+/g, '').split("");
    for (let i = 0; i < wordArr.length; i++) {
      let char = wordArr[i];
      if (char in letterMap) letterMap[char]++;
      else letterMap[char] = 1;
    }
  });
  return letterMap;
};

console.log(countLetters(array))
