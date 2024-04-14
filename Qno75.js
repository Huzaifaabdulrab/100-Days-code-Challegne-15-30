"use strict";
//Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
Object.defineProperty(exports, "__esModule", { value: true });
function useCompoundOperators() {
    let x = 4;
    console.log("Initial value :", 4);
    x += 2;
    console.log("After Addition :", x);
    x -= 1;
    console.log("After Subtraction :", x);
    x *= 3;
    console.log("After Multiplication :", x);
    x /= 2;
    console.log("After Division:", x);
}
useCompoundOperators();
