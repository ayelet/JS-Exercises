// ex7_4 - Ayelet Danieli - CAndy Store

const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

console.log(candyStore);
//     1. Implement the following getCandy function:
// The function should return the candy element with the specified id.
function getCandy(candyStore, id) {
  //your code
  for (let i in candyStore.candies) {
    if (candyStore.candies[i].id == id) return candyStore.candies[i];
  }
}

candy = getCandy(candyStore, "5hd7y");
console.log(candy);

// 2. Implement the following getPrice function:
// The function should return the price (number) of the candy with the specified
// id.
function getPrice(candyStore, id) {
  //your code
  let c = getCandy(candyStore, "5hd7y");
  if (c) {
    return c.price;
  }
}
console.log("\n*** Get a candy's price ***")
console.log(getPrice(candyStore, "5hd7y"));

// 3. Implement the following addCandy function:
// The function should add a new candy to the candy list in candyStore with a
// default amount of 1. The function will not return anything.
function addCandy(candyStore, id, name, price) {
  //your code
  // If candy already exists, return and do nothing
  if (getCandy(candyStore, id)) return;

  let amount = 1;
  candyStore.candies.push({ name, id, price, amount });
}

console.log("\n*** Add a new candy ***")
addCandy(candyStore, "5hd7y", "newTwix", 12, 3);
console.log(candyStore);
addCandy(candyStore, "2Assc", "Tortit", 7, 4);
console.log(candyStore);

// 4. Implement the following buy function: The function should add the candy
// price to the cashRegister, and decrease the amount property of the relevant
// candy.
function buy(candyStore, id) {
  //your code
  let candy = getCandy(candyStore, id);
  if (!candy) {
    console.log("candy not found");
    return;
  }

  if(candy.amount < 1) {
      console.log("We're out of candies");
      return;
  }

  candy.amount -= 1;
  candyStore.cashRegister += candy.price;

}
console.log("\n*** Buying a candy ***")
console.log(candyStore)
buy(candyStore, '5hd7y');
console.log(candyStore)
buy(candyStore, '2Assc')
buy(candyStore, '2Assc')
console.log(candyStore)
buy(candyStore, 'noidexist');

