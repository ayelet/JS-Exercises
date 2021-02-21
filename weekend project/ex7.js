// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)
console.log("*** ex 7.1 - Extending Array (map, forEach, filter) ***");

Array.prototype.myFilter = function (filterCallback) {
  let newArr = [];
  for (let i=0; i < this.length; i++)
    if (filterCallback(this[i]))
      newArr.push(this[i]);
  return newArr;
}

Array.prototype.myForEach = function(callback) {
  for (let i =0; i < this.length; i++){
    callback(this[i]);
  }
}

Array.prototype.myMap = function(mapCallback) {
  let newArr = [];
  for (let i=0; i < this.length; i++)
    newArr.push(mapCallback(this[i]));
  return newArr;
}


let testArr =  new Array(1,2,3,4,5,6);
console.log("myFilter: ", testArr.myFilter(elem => elem > 3)); // 4,5,6

let printDouble = (elem) => (console.log(elem*2));
console.log("extending forEach: " );
testArr.myForEach(printDouble); // 2,4,6,8,10

console.log(
  "implementing map:",
  testArr.myMap((a) => a * a));
 // [1,4,9,16,25,36]
