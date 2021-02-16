// ex13_1.js - Ayelet Danieli - Loops.

const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
    ];

const neighbours = (list) => {
    for (const item of list) 
        for (const internalItem of item)
            console.log(`Neighhbour: ${internalItem}`);
}

neighbours(listOfNeighbours);

// for... in => loop through keys of an object
// it iterates over prototype keys as well!
// if you don't need prototype keys use Object.entries(obj)!
// for... of => loop over sequence (letter in a word, for exapmle)