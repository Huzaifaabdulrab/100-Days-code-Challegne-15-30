//Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type Shape = {
    kind: "circle" | "rectangle",
    radius?: number,
    wight?: number,
    height?: number
};
let circle: Shape = {
    kind: "circle",
    radius: 5
};

let rectangle: Shape = {
    kind: "rectangle",
    wight: 20,
    height: 10,
};
console.log(circle);
console.log(rectangle);