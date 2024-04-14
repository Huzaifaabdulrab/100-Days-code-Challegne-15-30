"use strict";
//Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
Object.defineProperty(exports, "__esModule", { value: true });
function userGreet(userName = "Huzaifa") {
    console.log(`Hello ${userName}`);
}
userGreet();
