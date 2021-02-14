// ex8.1 - Ayelet Danieli - Objects

// 1. Create 3 separate objects that their key is called name
// and their value is a string. Store them in separate
// variables.
let obj1 = { name: 'Arthur'};
let obj2 = { name: 'George'};
let obj3 = { name: 'Sheila'};
// 2. Create a new Map object that sets each object as a key
// and assign an id number as the value.
let map1 = new Map();   
map1.set(obj1, 11111);
map1.set(obj2, 22222);
map1.set(obj3, 33333);

// 3. Iterate over the Map object with the for..of loop.
// - log the name and id
for (key of map1.keys()) {
    console.log(key.name, map1.get(key));
}

console.log(map1.keys());
// map1.keys().forEach(key => console.log(key));