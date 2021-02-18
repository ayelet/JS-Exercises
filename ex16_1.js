// Ex16_1 - Ayelet Danieli - hoisting

// Block 1
// 1. firstResult is a function (this is what is returned from someFunction()), b is still 1 (hoisting)
// 2. 5

// var b = 1;
// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }
//   b = 5;
//   return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);

// Block 2
// 1. b2() is called ==> because of hoisting a is declared as a function (a()) and not as a variable
// the function a() doesn't change the value of the global a
// 2. 1

var a = 1;
function b2() {
  a = 10;
  return;
  function a() {}
}
b2();
console.log(a);

// Block 3
// this block will print 3 3 3
// because i is declared outside of the for loop scope. for loop changes the value of i to 3
// before timeout returns and therefore i will be 3 all the time
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
