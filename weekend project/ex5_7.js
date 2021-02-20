// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String
console.log("*** ex 5.7- shortest word ***");

let shortestWord = (words) => {
  let num = words.split(" ").reduce((a, b) => (a = a > b.length ? a : b.length));
  console.log(num);
};

shortestWord("Hello beautiful world"); // => 9
shortestWord("I am num four"); // => 4
