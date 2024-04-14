//Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let mixedArry = [1, "apple", "Banana", true, "Carrot"];

let StringsArr = mixedArry.filter((item => typeof item==="string"));

console.log(StringsArr);
