/*
reduce mehtod:-
         perform some operations & reduces the array to a single value. it returns that single value.

*/

// let arr = [1, 2, 3, 4];

// const output = arr.reduce((res, curr) => {  
//     return res + curr;
// });
// console.log(output);



let arr = [5, 6, 2, 1, 3];
const output = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(output);