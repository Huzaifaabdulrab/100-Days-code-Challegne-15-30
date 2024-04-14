//Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

function addNumber_addString(number1: number, numString: string): number {
    return number1 + Number(numString);
}
console.log(addNumber_addString(10,"5"));
