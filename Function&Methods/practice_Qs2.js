/*
For a given array of numbers, print the square of each value using the forEach loop.
*/


// let nums = [2, 4, 3, 5, 6];
// nums.forEach((num) => {
//     console.log(num * num);
// });


let nums = [2, 4, 3, 5, 6];
let calcSquare = (num) => {
    console.log(num * num);
};
nums.forEach(calcSquare);
