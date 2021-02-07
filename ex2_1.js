// exercise 2.1 - Ayelet Danieli

function describeCountry(country, population, capitalCity) {
    let str = country + " has a popluation of " + population + " people, and its capital city is " + capitalCity;
    return str; 
}

let str1 = describeCountry("Israel", "10 million", "Jerusalem");
str2 = describeCountry("Jordan", "10 million", "Aman");
str3 = describeCountry("Germany", "100 million", "Berlin");

console.log(str1);
console.log(str2);
console.log(str3);
