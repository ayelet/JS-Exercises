// Ex 30.1 - Ayelet Danieli - Promises, promises

// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

let myPromise = new Promise(function(resolve, reject) {
  let x = Math.random() * 20;
  x > 10 ? resolve(x) : reject(x);
});

myPromise.then( function(x) {
  console.log(`Success: number ${x} > 10`);
}
, function(x) {
  console.log(`Rejected: number ${x} < 10`);
});

console.log(myPromise);