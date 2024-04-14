"use strict";
//Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
Object.defineProperty(exports, "__esModule", { value: true });
let circle = {
    kind: "circle",
    radius: 5
};
let rectangle = {
    kind: "rectangle",
    wight: 20,
    height: 10,
};
console.log(circle);
console.log(rectangle);
