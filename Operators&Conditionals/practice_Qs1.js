// Qs: Get user to input a number using prompt("Enter a number:"). check if the number is a multiple of 5 or not.

// alert("hello");

let num = prompt("enter a number:");

if (num % 5 == 0) {
    console.log(num, "is a multiple of 5");
} else {
    console.log(num, "is NOT a multiple of 5");
}