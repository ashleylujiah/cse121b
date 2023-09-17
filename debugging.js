const PI = 3.14;
let area = 0;
function circleArea(radius) {
    const area = radius * radius * PI;
    return area;
}
//Make this a comment
area = circleArea(3);
console.log("Area1:", area);
area = circleArea(4);
console.log("Area2:", area);
