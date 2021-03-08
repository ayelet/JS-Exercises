// ex35.2 - Classes - Ayelet Danieli

class Car {
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }

    print() { console.log(`Brand: ${this.brand}, Speed: ${this.speed}`)};
    getBrand() { return this.brand; }
    getSpeed() { return this.speed; }
    setSpeed(newSpeed) { this.speed = newSpeed; }
}

let cars = [ new Car("Ranault", 100), new Car("Subaru", 120), new Car("Citroen", 132),new Car("Ford", 110)];

let fastest = cars.reduce((a,b) => a.getSpeed() < b.getSpeed() ? b : a);
console.log(cars);
console.log("fastest car: ");
fastest.print();

function cmp (car1, car2) {
    return car1.getSpeed() - car2.getSpeed();
}
let sortCars = (cars) => {
    return cars.sort(cmp);
}
let sorted = sortCars(cars);
console.log("Sorted", sorted);