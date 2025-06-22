/*
promt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their fullname and ending with the fullname length.

example : "khushi" , username should be "@khushiSharma12"
*/

let fullName = prompt("enter your fullname without spaces");

let username = "@" + fullName + fullName.length;
console.log(username);