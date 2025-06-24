/*
We are given array of marks of students. Filter out of the marks of the students that score 90+.
*/

let marks = [97, 56, 93, 57, 89, 91];
let toppers = marks.filter((val) => {
    return val > 90;
});
console.log(toppers);



/*
Take a number n as input from user. create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
*/

let n = prompt("enter a number: ");
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr);


//sum
let sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log(sum);


// factorial
let factorial = arr.reduce((res, curr) => {
    return res * curr;
});
console.log("factoial= ", factorial);