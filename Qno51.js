"use strict";
//Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
Object.defineProperty(exports, "__esModule", { value: true });
function calculateArea(height, width) {
    return width * height;
}
console.log(calculateArea(5, 7));
let calculateArea1 = (height, width) => (height * width);
console.log(calculateArea1(5, 7));
