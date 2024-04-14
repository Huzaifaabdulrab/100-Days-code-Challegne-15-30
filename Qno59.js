"use strict";
//Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
Object.defineProperty(exports, "__esModule", { value: true });
function makeAdd(valueAdd) {
    return function (number) {
        return number + valueAdd;
    };
}
let addFive = makeAdd(5);
console.log(addFive(10));
