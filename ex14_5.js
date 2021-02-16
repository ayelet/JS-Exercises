// ex 14.5 - Ayelet Danieli

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it
// down.
// counter + 1

// 2. Which debug method did you use to find the bug?
// debug console

// 3. Explain the bug in your own words.
// counter is not assigned (no operator = there)
// 4. Fix the code and submit it all.

function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter = counter + 1;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");
