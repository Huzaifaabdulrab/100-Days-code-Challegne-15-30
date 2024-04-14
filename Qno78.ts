// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

function declarations(number : number): number {
    return number * number
}

const expressions = function(number:number):number {
    return number * number
}

console.log(declarations(4))
console.log(expressions(4))