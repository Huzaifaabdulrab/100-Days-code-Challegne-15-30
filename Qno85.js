"use strict";
// Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
Object.defineProperty(exports, "__esModule", { value: true });
function findingIndex(str) {
    return str.indexOf("code");
} //0 index
console.log(findingIndex("code is life"));
//8 index
console.log(findingIndex("life is code"));
