"use strict";
//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
Object.defineProperty(exports, "__esModule", { value: true });
let grade = [88, 94, 72, 99, 53, 77];
let averageGrade = grade.reduce((result, grade) => result + grade, 0);
console.log(averageGrade);
// let averageGrade = grade.reduce((total, grade) => total + grade, 0)
// console.log(averageGrade);
