// Classes - Author: Ayelet Danieli


class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    getName() { return this.name; }
    getSound() { return this.sound; }
    print() { return `I'm a ${this.name}: ${this.sound}`}
}

let bat = new Animal("Bat", "eeeeeeeeee");
console.log(bat.getName(), bat.getSound());
let shrew = new Animal("Shrew", "icccckccccc");
let tazmanianDevil = new Animal("Tazmaniam Devil", "arrrrrrrrrggggh");

console.log(bat.print());
console.log(shrew.print());
console.log(tazmanianDevil.print());