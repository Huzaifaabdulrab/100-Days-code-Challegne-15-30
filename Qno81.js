"use strict";
//Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
Object.defineProperty(exports, "__esModule", { value: true });
function logObjectProperties(obj) {
    for (let property in obj) {
        console.log(`${property} ${obj[property]}`);
    }
}
logObjectProperties({ make: "Toyota", model: "Corolla", year: 2021, color: "blue" });
