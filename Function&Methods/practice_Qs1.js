/*
Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string
*/

/*
Create an arrow function to perform the same task.
 */



function CountVowels(str) {
    let count = 0;

    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }

    console.log(count);
}
CountVowels("khushi");



// using arrow function
const CountVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}
CountVow("aeiou");