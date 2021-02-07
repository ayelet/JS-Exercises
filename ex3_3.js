// exercise 3.3- Ayelet Danieli - percantageOfWorld - Function expression

function percentageOfWorld1(population) {
    let percentage = population / 7900 * 100;
    return percentage.toFixed(2);
}

// Function declaration
let percent1 = percentageOfWorld1(1000);
let percent2 = percentageOfWorld1(820);
let percent3 = percentageOfWorld1(200);
console.log(`China is ${percent1}% of world's population`);
console.log(`Indonesia is ${percent2}% of world's population`);
console.log(`Germany is ${percent3}% of world's population`);

// Function Expression
let percent = function(population) {
    return (population / 7900 * 100).toFixed(2);
}

console.log(`China is ${percent(1000)} of world's population`);
console.log(`Indonesia is ${percent(820)} of world's population`);
console.log(`Germany is ${percent(200)} of world's population`);