"use strict";
//Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.
Object.defineProperty(exports, "__esModule", { value: true });
function convertingStr(str) {
    let upperStr = str.toUpperCase();
    let lowerStr = str.toLowerCase();
    console.log(`UpperCase = ${upperStr} `);
    console.log(`LowerCase = ${lowerStr}`);
}
convertingStr("HuZaiFa");
