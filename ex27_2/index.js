// ex27.2 - Ayelet Danieli - prototype

// You are given a function, Pokeman, that takes three parameters,
// pokemonName, pokemonType, an array of different pokemon attack methods,
// pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in a variable.
// 2. Using prototype properties, add the following methods:
// • A method called callPokemon that will print the following: “I choose
// you, <pokemon name>
// • A method called attack that takes one parameter, an attack number,
// that will print the specific attack method from the pokemonAttackList
// array as the following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.
// Here is the Pokemon function:
// Submit your answer to Hive.
function Pokemon(pokemonName, pokemonType, pokemonAttackList){
this.name = pokemonName;
this.type = pokemonType;
this.attackList = pokemonAttackList;
}
Pokemon.prototype.callPokemon = function() {
    console.log(`I choose you, ${this.name}`);

}
Pokemon.prototype.Attack = function(i) {
    if ((i < 0) || (i > this.attackList.length))
    i=0;
    console.log(`${this.name} used ${this.attackList[i]}`)
}

let charizard = new Pokemon("charizard", "dragon", ["Fighting", "Flying", "Ground", "Rock"]);
let latios = new Pokemon("Latios", "legendary", ["Dark", "Psychic", "Rock", ]);
let pikachu = new Pokemon("charizard", "electric", ["Electric", "Fighting", "Ground"]);
console.log(charizard);
console.log(latios);
console.log(pikachu);

pikachu.callPokemon();
pikachu.Attack(0);
latios.callPokemon();
latios.Attack(1);
charizard.callPokemon();
charizard.Attack(3);
