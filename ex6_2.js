// exercise 6.2 - Ayelet Danieli - Arrays
"use strict";
///////////////////////////////////////////
const people = ["Greg", "Mary", "Devon", "James"];

// function logPeople() {
//     for(let i=0; i < people.length; i += 1) {
//         console.log(people[i]);
//     }
// }

console.log(people);
//remove Greg
console.log("***** remove Greg ******");
people.shift();
console.log(people);


// remove James
people.pop();
console.log("**** remove James ***");
// logPeople();
console.log(people);


// add Matt to the start
console.log("*** added Matt ***");
people.unshift("Matt");
// logPeople();
console.log(people);

// // add my name to the end of the list
console.log("*** added myself ***");
people.push("Ayelet");
console.log(people);

// exit from loop when reaching Mary
let i=0;
console.log("** Loop until Mary")
let p = people[0];
for (let i=0; p != 'Mary'; i += 1) {
    p = people[i];
    console.log(p);
}


// slice out Mary and Matt
people.push("Greg");
console.log("*** Slice out Mary and Matt ***");
// people.splice(1);
// people.splice(3);
console.log(" before slice --------")
// logPeople();
console.log(people);
console.log(" after slice --------")
const people1 = (people.slice(2,4));
// people1.forEach(p => {
//     console.log(p);
// });
console.log(people1);

// Write the command that gives the indexOf where "Mary" is located.
console.log('*** IndexOf ***');
console.log(people.indexOf('Mary'));

// Write the command that gives the indexOf where "Foo" is located (this
//     should return -1).
console.log('IndexOf Foo');
console.log("The index of Foo is", people1.indexOf('Foo'));

// Redefine the people variable with the value you started with. Using the
// splice command, remove "Devon" from the array and add "Elizabeth"
// const people = ["Greg", "Mary", "Devon", "James"];
// and "Artie". Your array should look like this when you are done ["Greg",
// "Mary", "Elizabeth", "Artie", "James"].

console.log('*** USing splice ***');
const newPeople = ["Greg", "Mary", "Devon", "James"];
newPeople.splice(2,1, "Elizabeth", "Artie");
// newPeople.forEach(p => {
//     console.log(p);
// });
console.log(newPeople);

// Create a new variable called withBob and set it equal to the people
// array concatenated with the string of "Bob".
// let withBob = [];
newPeople.push('Bob');
let withBob =  newPeople;
console.log(withBob);
// withBob.forEach(p => {
//     console.log(p);
// });