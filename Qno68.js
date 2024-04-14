"use strict";
//Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
Object.defineProperty(exports, "__esModule", { value: true });
function multiplying_Decimal(numb1, numb2) {
    return Math.round((numb1 * numb2) * 100) / 100;
}
console.log(multiplying_Decimal(0.1, 0.2));
