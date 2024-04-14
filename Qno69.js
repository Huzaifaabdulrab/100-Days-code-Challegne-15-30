"use strict";
//Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
Object.defineProperty(exports, "__esModule", { value: true });
function divideAndremainder(divided, devister) {
    let quotient = Math.floor(divided / devister);
    let remainder = (divided % devister);
    return { quotient, remainder };
}
console.log(divideAndremainder(10, 5));
