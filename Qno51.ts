
//Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.


function calculateArea(height: number, width: number,): number {
    return width * height
}
console.log(calculateArea(5, 7))

let calculateArea1=(height:number, width: number): number=>(
    height * width
) 
console.log(calculateArea1(5,7));
