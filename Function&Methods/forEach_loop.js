//forEach loop in Arrays
/*
arr.forEach(callBackFunction)
callBackFunction : here, it is a function to execute for each element in the array.

. A callBack is a function passed as an argument to another function.

example:-       
           arr.forEach((val) => {
               console.log(val);
            })
*/



let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
    console.log(val);
});



// let arr = [1, 2, 3, 4, 5];
// arr.forEach((val) => {
//     console.log(val);
// });




let arr1 = ["pune", "delhi", "mumbai"];

arr1.forEach((val, idx, arr1) => {
    console.log(val.toUpperCase(), idx, arr1);
});