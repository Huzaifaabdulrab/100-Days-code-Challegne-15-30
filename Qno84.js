"use strict";
// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".
Object.defineProperty(exports, "__esModule", { value: true });
function replaceText(programing1) {
    return programing1.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceText("I love JavaScript & JavaScript is awesome! "));
