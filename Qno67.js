"use strict";
//Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 
Object.defineProperty(exports, "__esModule", { value: true });
function addNumber_addString(number1, numString) {
    return number1 + Number(numString);
}
console.log(addNumber_addString(10, "5"));
