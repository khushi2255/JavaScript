// Compact way of writing a function

/*
Syntax:
            const functionName = (param1, param2...) => {

                        // do some work

              }
*/


//Sum function
const arrowSum = (a, b) => {
    console.log(a + b);
}
arrowSum(2, 5);



// multiplication function
const arrowMulti = (a, b) => {
    console.log(a * b);

}
arrowMulti(12, 3);



// 2nd method:-
// const arrowMulti = (a, b) => {
//     return a * b;
// }
// let val = arrowMulti(12, 3);
// console.log(val);