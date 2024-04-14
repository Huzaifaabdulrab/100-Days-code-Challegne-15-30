//Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.


function multiplying_Decimal(numb1: number, numb2: number): number {
    return Math.round((numb1 * numb2) * 100) / 100
} console.log(multiplying_Decimal(0.1, 0.2))

