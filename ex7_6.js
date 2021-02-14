
// ex7.5 - Ayelet Danieli - Objects

// 1. Create a function that receives 1 argument, an object and returns a new
// object with the properties and values swapped.
let someObj = { a: 2, b: 'something', c: 'thing 2', d: 5};
let swapped = (obj) => {
    let newObj = new Object();
    let properties =  Object.keys(obj).reverse();
    properties.forEach(prop => {
        newObj[prop] = obj[prop];
    })
    return newObj;
}

console.log('original', someObj);
console.log('swapped', swapped(someObj));
