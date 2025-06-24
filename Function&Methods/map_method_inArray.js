/*

Map:-

Create a new array with the results of some operation. the value its callback returns are used to form new array.

arr.map(callbackFnx(value,index,array))

*/

let nums = [67, 89, 45];
let newArr = nums.map((val) => {
    return val * 2;
});
console.l(newArr);


let calcSquare = (num) => {
    console.log(num * num);
};