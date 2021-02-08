// exercise 5.1 - Ayelet Danieli - A country to live in
"use strict";



// isCountryToLiveIn parameters: 
//      language - String 
//     isIsland - boolean (true if country is an island, else false)
//     population - number of residents in million
//     country  - string: name of country
//     returns: true if country meets Sara's criteria, else false
///////////////////////////////////////////
let isCountryToLiveIn = (language, isIsland, population, country) => {
    
    if ((language.toLowerCase() == 'english') && (population < 50) && (!isIsland))
        return true;
    else
        return false;
}

// Prints the proper output to the console
let countryToLiveIn = (language, isIsland, population, country) => {
    let output = '';
    if (isCountryToLiveIn(language, isIsland, population, country))
        output = `You should live in ${country}`;
    else 
        output = `${country} does not meet your criteria`;

    return output;
}

console.log(countryToLiveIn('English', true, 100, 'England'));
console.log(countryToLiveIn('Swedish', false, 10, 'Sweden'));
console.log(countryToLiveIn('English', true, 2, 'Faroh Islands'));
console.log(countryToLiveIn('English', false, 2, 'Jordan'));
