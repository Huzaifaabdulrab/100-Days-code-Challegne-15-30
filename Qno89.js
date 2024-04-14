"use strict";
//Question 89: Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) and rounds it to two decimal places.
Object.defineProperty(exports, "__esModule", { value: true });
function roundNum(num1) {
    return Number(num1.toFixed(2));
}
console.log(roundNum(11.245444446));
