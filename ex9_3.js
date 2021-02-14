// ex9.3 - Ayelet Danieli - Callbacks

const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
console.log('before sort: ', foods);

// a.1. Sort the array of strings from descending to ascending
// order
let ascending = (a, b) => { return (a<b?-1:(a>b ? 1:0));  };
console.log('after ascending sort: ', foods.sort(ascending)); 
// a.2. Sort the array of strings from descending to ascending
// order.
let descending = (a, b) => { return (a>b?-1:(a<b?1:0));  };      
console.log('after descending sort: ', foods.sort(descending)); 

// b. Lets sort an array of words that includes a word with an
// uppercase:
const foodsWithUpperCase = [
    "falafel111",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

console.log('\nbefore sort:', foodsWithUpperCase);

//     b.1. Sort the array of strings from descending to ascending
// order.
console.log('after ascending sort: ', foodsWithUpperCase.sort(ascending)); 


// b.2. Sort the array of strings from descending to ascending
// order.
console.log('after descending sort: ', foodsWithUpperCase.sort(descending)); 

// c. Longest word
const words = ["apple", "supercalifragilisticexpialidocious",
"hi", "zoo"];
let sortByLength = (a,b) => { return b.length- a.length; };

// c.1. Sort the array of strings from the longest word to the
// shortest word only using the sort function
console.log('\nBefore sort:', words);
console.log('after sort:', words.sort(sortByLength));