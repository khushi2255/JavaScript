/*

Create a new button element . Give it a text "click me", background color of red & text color of white.

insert the button as the first element inside the body tag.

*/

let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);




/*
Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.

Did you notice, how you overwrite the class name when you add a new one?
Solve this problem using classList.
*/


let para= document.querySelector("p");
// para.getAttribute("class");
// para.setAttribute("class", "newClass");

console.log(para.classList);
para.classList.add("newClass");
console.log(para.classList);