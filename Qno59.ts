//Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.

function makeAdd(valueAdd: number): (number : number) => number {
    return function (number: number): number {
        return number + valueAdd
    };
}
let addFive = makeAdd  (5);
console.log(addFive(10));
