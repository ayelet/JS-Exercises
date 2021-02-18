// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)
console.log("*** ex 7.1 ***");
//TODO

let myFilter = (arr, filterFunc) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (filterFunc(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
};

// arr.forEach(callback(currentValue[, index[, array]]) {
//     // execute something
//   }[, thisArg]);
// Array.prototype.myForEach = (func) => {
//     let thisp = arguments[1];  // this is implicit
//     console.log('length: ', this.length);
//     for(let i=0; i < thisp.length; i++) {
//         // func.call(thisp[i]);
//         func.call(thisp, this[i], i, this);
//     }
//  };
let forEach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) func(arr[i]);
};

console.log('implementing myFilter', myFilter([1, 2, 3, 4, 5, 6], (a) => a > 3)); //[4,5,6]
let arr7 = [0, 1, 2, 3, 4];
console.log('forEach:');
forEach(arr7, (a) => console.log("hey ", a));

let myMap = (arr, mappingFunc) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) newArr.push(mappingFunc(arr[i]));
  return newArr;
};

console.log(
  "implementing map:",
  myMap([1, 2, 3, 4], (a) => a * 2)
); // [2,4,6,8]

//TODO- implement with object
