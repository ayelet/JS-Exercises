// Ex 30.2 - Ayelet Danieli - Promises, promises

// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch.
let arr2 = ["The", 234, "little", "fox", "jumps", "over", "the", "fence"];
let arr1 = ["The", "little", "fox", "jumps", "over", "the", "fence"];
function sortArr(arr) {
  return new Promise(function (resolve, reject) {
    let af =  arr.filter(el => !isNaN(el));
    let condition = af.length > 0;
    console.log("condition", condition);
    // let condition = arr.map(element => arr.filter(element => !isNan(element))) > 0;
    if (condition) resolve((arr) => arr);
    else reject("ivalid array: shoud contain only strings");
  });s
}
function capsAll(arr) {
  return new Promise(function (resolve, reject) {
    let af =  arr.filter(el => !isNaN(el));
    let condition = af.length === 0;
    if (condition) 
      resolve(arr);
    else reject("rejected: should contain string only");
  });
}

capsAll(arr1)
.then(arr => arr.sort())
.then(arr=> capsAll(arr))
.then(arr => arr.map(w => w.toUpperCase()))
.then(arr => console.log(arr))
.catch(err => console.log("error", err));

capsAll(arr2)
.then(arr => arr.sort())
.then(arr=> capsAll(arr))
.then(arr => arr.map(w => w.toUpperCase()))
.then(arr => console.log(arr))
.catch(err => console.log("error", err));
