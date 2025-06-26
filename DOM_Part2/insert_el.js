let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);


// if we want to insert Button after the paragraph:
// let para = document.querySelector("p");
// para.after(newBtn);



// if we want to insert Button after the heading:
let newHeading = document.querySelector("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";

document.querySelector("body").prepend(newHeading);



//if we want to dlt the paragraph
let para1 = document.querySelector("p");
para1.remove();
