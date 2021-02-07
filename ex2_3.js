// exercise 2.3 - Ayelet Danieli - Circle Area

function circleArea(radius) {
    if (isNaN(radius))
        return -1;
    if (radius < 0) 
        return -1;

    let area = Math.PI * radius * radius;

    return area.toFixed(2);
    
}

let negVal = circleArea(-1);
let strVal = circleArea("hhh");
let area = circleArea(1);

console.log(negVal, strVal, area);