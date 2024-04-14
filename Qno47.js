"use strict";
// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops,
//  each with properties make, model, and year, use array destructuring to assign 
// the first and second laptops to variables. Then, log these variables.
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = [
    { make: "Dell", model: "Xps15", year: 2021 },
    { make: "Apple", model: "MacBook", year: 2020 },
    { make: "HP", model: "spectrex360", year: 2021 }
];
let [laptop1, laptop2, laptop3] = laptop;
console.log(laptop1);
console.log(laptop2);
// console.log(laptop3);
