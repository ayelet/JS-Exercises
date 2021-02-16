// ex10_3.js - Ayelet Danieli - Data messaging

const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

// 1. Create a function that returns all the names from the array.
let getNames = (data) => data.map((item) => item.name);
console.log(getNames(data));

// 2. Create a function that returns all the objects that are born before 1990.
let isGenY = (birthday) => {
  let year = parseInt(birthday.slice(-4));
  console.log(year);
  return year < 1990 ? true : false;
};
let getGenerationY = (data) => {
  // data.filter( (data.birthday));
  return data.filter((data) => isGenY(data.birthday));
};
console.log("\n***** People who were born before 1990");
console.log(getGenerationY(data));

// 3. Create a function that returns an object of all the different foods from all
// the objects as the key and the number of times that food is present in all the
// objects as the value.

// const result = words.filter(word => word.length > 6);
// function isBigEnough(value) {
//     return value >= 10
//   }

//   let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)

let getDifferentFoods = (data) => {
  let differentFoods = new Object();
  data.forEach((element) => {
    for (const foodType in element.favoriteFoods) {
      for (const food of element.favoriteFoods[foodType])
        if (food in differentFoods) 
            differentFoods[food]++;
        else 
            differentFoods[food] = 0;

    }

  });

  return differentFoods;
};

console.log("\n\n***** Different foods");
console.log(getDifferentFoods(data));

