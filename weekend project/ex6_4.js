
// Ex6.4 - isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case
console.log("*** ex 6.4 - Isogram ***");
let isIsogram = (str) => {
    let str1 = str.toLowerCase();
    for (let i=0; i < str1.length; i++) {
        if (str1.toLowerCase().indexOf(str1[i]) !== i) 
        return false;
    }
    return true;
};
console.log(isIsogram("Dermatoglyphics"));// == true
console.log(isIsogram("aba"));// == false
console.log(isIsogram("moOse"));// == false // -- ignore letter case
console.log(isIsogram("abcdef"));// == true
