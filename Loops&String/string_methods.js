//These are built-in functions to manipulate a string
/* 
         .str.toUpperCase()
         .str.toLowerCase()
         .str.trim()   // it removes whitespaces
*/


//str.toUpperCase()
let str1 = "JavaScript";
let newStr = str1.toUpperCase();
console.log(str1);
console.log(newStr);



//str.toLowerCase()
let str2 = "KHUSHI";
str = str2.toLowerCase();
console.log(str);


//str.trim() : removes whitespaces (starting,end)
let str3 = "        Java    script     js         ";
console.log(str3.trim());

// str,slice(start, end?) : it returns part of string
let str4 = "khushi";
console.log(str4.slice(1, 3));




// str1.concat(str2)
let firstName = "Aryan";
let lastName = "Sharma";

// let res = firstName.concat(lastName);
let res = firstName + " " + lastName;
console.log(res);



//str.replace(searchVal, newVal)

let str5 = "hellololo";
// console.log(str5.replace("o", "p"));
console.log(str5.replaceAll("lo", "p"));



//str.charAt(idx)
let str6="JavaScript";
console.log(str6.charAt(4));