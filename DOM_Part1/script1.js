console.dir(document.body);
console.log(document.body);


// DOM Manupulation:-

// Selecting with id
let heading = document.getElementById("head1");
console.dir(heading);

// Selecting with class
let headings = document.getElementsByClassName("head-class");
console.dir(headings);
console.log(headings);

// Selecting with tag
let parahs = document.getElementsByTagName("p");
console.dir(parahs);



// Method2: Query Selectors

let firstEl = document.querySelector("p");   // 1st element
console.dir(firstEl);

let allEl = document.querySelectorAll("p");   // all element
console.dir(allEl);



let firstClass = document.querySelector(".head-class");
console.dir(firstClass);

let allClass = document.querySelectorAll(".head-class");
console.dir(allClass);


let head = document.querySelector("#head1");   // 1st element
console.dir(head);