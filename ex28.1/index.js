// Ex 28.1 - Ayelet Danieli - Call , bind and apply

// 1. What is wrong with the code? explain in your own words
// 2. Fix the code so that invoking the whoIsStronger function
// will print "I am stronger".
// note: you cannot change the 'hero' or the whoIsStronger
// function.

// Solution: 
// Function's scope is not where it is declared, but where it is called. Since it was called
// from the global scope, it did not recognize this.health and this.strength.
// In order to fix it, one needs to bind the function to the scope of object hero:
// hero.getStrength.bind(hero);

const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    //   console.log("getstrength() func: ", this);
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

/////////////////////////////////
hero.getStrength.bind(hero);

//////////////////////////////////

console.log(whoIsStronger(hero.getStrength));