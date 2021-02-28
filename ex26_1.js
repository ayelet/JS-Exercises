// ex26_1.js - Ayelet Danieli - This

// Question 1:
// In your own words what will this point to and why?(Note
// this is the global scope)
console.log(this);
console.log("Hello", this);

// this will point to the scope of where it was called. If called from global scope then this
// it returns {}

// Question 2:
// a. In your own words what will this point to and why.
// b. How can you fix this code.
const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();

// In this case this will point to the scope, because arrow functions inherit
// from the parent and since name is undefined in the global scope it prints:
// Hello undefined
// To fix it we need to either:
// 1.save "this"
// 2. refactor the arrow function to a regular function, so it points the the object's scope
const myObj1 = {
  name: "Timmy",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
myObj1.greet();

// Question 3:
// In your own words what will this point to and why?
const myFuncDec = function () {
  console.log("myFuncDec", this);
};

// this points to the scope it was called from, therefore it points to the window scope
// myFuncDec();

// Question 4:
// In your own words what will this point to and why?
const myFuncArrow = () => {
console.log("myFuncARrow", this);
}; myFuncArrow();

// arrow function points to one level higher scope, and since the scope is window, the this points to an empty scope {}

// Question 5:
// a. In your own words what will this point to and why.
// b. How can you fix this code.

document.querySelector(".element").addEventListener(() => {
console.log(this);
});

// this points the the global scope since an arrow function calls a higher level scope