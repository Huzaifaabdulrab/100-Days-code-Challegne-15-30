"use strict";
// Self-Running User Profile Create a Quick self-setup profile for a user than can tell you the user's name and age.
Object.defineProperty(exports, "__esModule", { value: true });
let profile = (function () {
    let name = "Huzaifa";
    let age = 16;
    return {
        displyInfo: function () {
            console.log(`Name : ${name} , Age ${age}`);
        }
    };
})();
profile.displyInfo();
