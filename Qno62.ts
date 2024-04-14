//Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface student {
    name1: string,
    age: number,
    courses: string[]
}
let StudentData: student = {
    name1: "Huzaifa",
    age: 16,
    courses: ["Math", "Chemsitry", "Physics"]
};
console.log(StudentData);
