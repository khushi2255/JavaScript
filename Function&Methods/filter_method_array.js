/*
FILTER Method:-
Create a new array of elements that give true for a condition/filter.
*/



// all even elements.
let arr = [1, 2, 3, 4, 5, 6, 7];

let evenArr = arr.filter((val) => {
    console.log(val % 2 === 0);
});
console.log(evenArr);




// value greater than 3

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = arr.filter((val) => {
//     console.log(val > 3);
// });
// console.log(evenArr);