//  DOM MANIPULATION (Properties)


// tagName
let firstEl = document.querySelector("p");
console.dir(firstEl);
console.log(firstEl.tagName);

// innerText
// console.dir(document.body.firstChild);
// let innerTxt = document.querySelector("div").children;
// console.dir(innerTxt);

let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);


//textContent
let headings = document.querySelector("#heading");
console.dir(headings);
console.log(headings.innerText);  // hidden text -> doen't show
console.log(headings.textContent); // hidden text -> show
