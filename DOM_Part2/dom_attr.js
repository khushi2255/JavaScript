// DOM Attributes


//getAttribute(attr)
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);


// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));



// setAttribute(attr, value)
let para = document.querySelector("p");
console.log(para.setAttribute("class", "newClass"));


// style:-

let divs = document.querySelector("div");
// console.log(divs.style)
divs.style.backgroundColor = "green";
divs.style.backgroundColor = "purple";
// divs.style.visibility = "hidden";

divs.style.fontSize = "26px";
divs.innerText = "Hello!";
