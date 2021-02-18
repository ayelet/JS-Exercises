// ex15_1.js - Ayelet Danieli - Scope and Hoisting

// Block 1
// 1. calling log(a) will return undefined because assignment to a is performed later in code
// 2. calling log(foo()) will return 2. Although foo() is declared later in code, because of js closure
// function is hoisted

function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
    return 2;
    }
    }
    funcA();

// Block 2
// 1. console.log(obj.prop.getFullName()); ==> will return "Aurelio De Rosa"
// because function is in the scope of the object prop, as well as a new assignment to fullName (overwrite)
// 2. var test = obj.prop.getFullName; ==> returns undefined because there is no object property in this name

var fullName = 'John Doe';
var obj = {
fullName: 'Colin Ihrig',
prop: {
fullName: 'Aurelio De Rosa',
getFullName: function () {
return this.fullName;
}
}
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

// Block 3:
// funcB returns 1
// 1. typeof a ==> undefined because it is not in the scope of the same console (it is local to the function)
// 2. typeof b ==> number because it is global (by default it is var because it wasnt declared inside the function)
// 2. undefined

function funcB() {
let a = b = 0;
// let a = 0;
a++;
return a;
}
console.log(funcB());
console.log(typeof a);
console.log(typeof b);

// Block 4
// This will print 2 twice because the funcC() is declared twice, so the latter will override the first
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();

// Block 5
// 1. 1
// 2. undefined
// 3. e not defined since it wasn't assigned outside the scope of the function, and function didn't return it
// 4.
function funcD1() {
    d = 1;
    }
    funcD1();
    console.log(d);
    function funcD2() {
    var e = 1;
    }
    funcD2();
    console.log(e);

//Block 6
// 1. value of f in global scope : udefined (hoisting only puts the variable name up in the code, not it's value)
// 2. value of f in local scope : 1
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
