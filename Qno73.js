"use strict";
//Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.
Object.defineProperty(exports, "__esModule", { value: true });
function updateVariable() {
    let name1 = "Huzaifa"; //initial value;
    console.log(`Initiaz value : ${name1}`);
    name1 = "GIAIC";
    console.log(`Update value : ${name1}`); //update
}
updateVariable();
