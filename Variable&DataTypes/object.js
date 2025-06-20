// Objects: Collection of Values.
const student = {
    fullName: "khushi kumari",
    age: 20,
    cgpa: 7.8,
    isPass: true
}
console.log(student);
console.log(typeof student);

// access keys : 2 methods
console.log(student.age);
console.log(student["cgpa"]);

// change name
// you can change the constant keys of an object.
student['fullName'] = "Aryan sharma";
console.log(student);