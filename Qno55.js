"use strict";
//Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
Object.defineProperty(exports, "__esModule", { value: true });
let num1 = [1, 2, 3, 4, 5,];
let doubleNum = num1.map(num => num * 2);
console.log(doubleNum);
