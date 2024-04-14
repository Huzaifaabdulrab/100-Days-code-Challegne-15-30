"use strict";
//Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
Object.defineProperty(exports, "__esModule", { value: true });
function createObjectWithDynamicKey(key, val) {
    let dynamicObject = {};
    dynamicObject = [key] = val;
    return dynamicObject;
}
let userPreference = createObjectWithDynamicKey("Them", "Dark");
console.log(userPreference);
// function createObjectWithDynamicKey(key: string, val: string) {
//     let dynamicObject={};
//     dynamicObject = [key] = val;
//     return dynamicObject
// }
// let userPreference = createObjectWithDynamicKey("them","dark");
// console.log(userPreference);
// function createObjectWithDynamicKey1(key : string, val:string){
//     let dynamicObject1={};
//     dynamicObject1 = [key]=val;
//     return dynamicObject1
// }
// let userPreference1 = createObjectWithDynamicKey1("them","dark");
// console.log(userPreference1);
