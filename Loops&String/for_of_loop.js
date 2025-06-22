// for string and array

/*
Syntax:- 
               for(let val of strVar){
                  // do some work
               }
*/

let str = "JavaScript";
let size = 0;
// iterator -> characters

for (let i of str) {
    console.log("i = ", i);
    size++;
}

console.log("string size =", size);