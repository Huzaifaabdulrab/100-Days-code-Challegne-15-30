//Question 89: Rounding Numbers: Create a function that takes a number with decimals (e.g., 3.14159) and rounds it to two decimal places.

function roundNum(num1:number):number {
    return Number(num1.toFixed(2))
}
console.log(roundNum(11.245444446));
