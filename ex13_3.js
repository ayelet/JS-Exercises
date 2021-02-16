// ex13_3.js - Ayelet Danieli - Compare Arrays.

// const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food = ["Noodle", "Pasta", "Meat", "Cucumber"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.

let compareArrays = (arr1, arr2) => {
  let sameItems = []; 
    for (const item of arr1) {
        for (const item2 of arr2)
        if (item === item2) sameItems.push(item);
    };
  return sameItems.length > 0 ? sameItems : false;
};

console.log(compareArrays(food, food1));
