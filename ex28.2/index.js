// Ex 28.2 - Ayelet Danieli - Call , bind and apply

// Create an object with a name property. The object should
// also have a method that prints its name, and another
// method that prints its name after a second with the help of
// setTimeOut. in this exercise, you are not allowed to use
// arrow functions.

const Pokemon = {
  name: "pikachu",
  counter: 0,
  printName: function() { console.log(`calling ${this.name}: ${this.counter++}`);},
  printName2: function() {
    setTimeout(this.printName.bind(this), 1000);
  },
}

Pokemon.printName();
Pokemon.printName2(Pokemon);
