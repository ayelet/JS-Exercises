// Ex5.8 - shortest words version 2
// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.
console.log("*** ex 5.8 ***");

let shortestWord2 = (words) => {
  let word = words
    .split(" ")
    .reduce((a, b) => (a = a.length > b.length ? a : b));
  console.log(word);
};

shortestWord2("Hello beautiful world"); // => beautiful
shortestWord2("I am num four"); // => four

