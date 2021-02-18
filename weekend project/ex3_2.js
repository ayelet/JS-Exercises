// Ex3.2 - People on the Bus
// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two
// items which represent number of people get into bus (The first item) and number of people get
// off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after
// the last array). Even though it is the last bus stop, the bus is not empty and some people are still
// in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always
// >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.
console.log("*** ex 3.2 - People on bus ***");

let numPeopleOnBus = (arr) =>
  arr.map((a) => a[0] - a[1]).reduce((a, b) => a + b);

console.log(
  numPeopleOnBus([
    [10, 0],
    [4, 5],
    [3, 2],
  ])
); // 10
console.log(
  numPeopleOnBus([
    [10, 0],
    [2, 4],
    [5, 6],
  ])
); // 7
console.log(
  numPeopleOnBus([
    [10, 0],
    [0, 5],
    [1, 3],
  ])
); // 3

