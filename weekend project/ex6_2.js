// Ex6.2 - Counting Duplicates
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

console.log("*** ex 6.2 ***");
// const vowelCount = (str) => {
//     let vowels = [];
//     let chars = str.toLowerCase().split("");
//     chars.forEach((c) => {
//       if (isVowel(c)) {
//         if (c in vowels) vowels[c]++;
//         else vowels[c] = 1;
//       }
//     });

//     return vowels;
//   };

let countDuplicates = (str) => {
  let map = [];
  for (let c of str) {
    console.log(c);
    if (c in map) map.c += 1;
    //map.push({ `${c}`: 1});
    else map.c = 1;
  }
  console.log(map);
};
//TODO

// countDuplicates("abcde");// -> 0 # no characters repeats more than once
countDuplicates("aabbcde"); //-> 2 # 'a' and 'b'
// countDuplicates("aabBcde");// -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// countDuplicates("indivisibility");// -> 1 # 'i' occurs six times
// countDuplicates("Indivisibilities");// -> 2 # 'i' occurs seven times and 's' occurs twice
// countDuplicates("aA11");// -> 2 # 'a' and '1'
// countDuplicates("ABBA");// -> 2 # 'A' and 'B' each occur twice






