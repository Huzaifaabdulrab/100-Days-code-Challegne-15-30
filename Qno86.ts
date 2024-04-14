// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.

function checkStr(str:string):boolean {
    return str.includes("JavaScript")
}
console.log(checkStr("I love python"));
console.log(checkStr("JavaScript"));
