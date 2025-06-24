// Function: Block of code that performs s specific task, can be invoked whenever needed.
/*
 Function Definition:-
                        function functionName(param1, param2...){

                              // do some work
                        }

Function Call:-
                    functionName();

*/

/*

NOTE:-
    function parameter : like local variables of function -> block scope

*/

// redundancy -> repeat
function myFunction() {
    console.log("We are learning Js");
}

myFunction();




function printMsg(msg) {
    // parameter -> input
    console.log(msg);
}
printMsg("I like to learn Js!");  // argument




//function -> calculate sum of two number
function CalcSum(a, b) {
    // local variables -> scope
    sum = a + b;
    return sum;
}
let val = CalcSum(2, 4);
console.log(val);