"use strict";
// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
Object.defineProperty(exports, "__esModule", { value: true });
// block scope
{
    let blockLet = "visible inside the block";
    let blockConst = "also only inside the block";
    console.log(blockLet);
    console.log(blockConst);
}
try {
    console.log(blockLet);
}
catch (blockLet) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    console.log(blockConst);
}
catch (blockConst) {
    console.log("`blockLet` is not accessible outside the block.");
}
