/*

Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.

Create 3 divs with common class name-"box". Access them & add some unique text to each of them.

*/


let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College students";




let divs = document.querySelectorAll(".box");
console.log(divs);
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

let idx = 1;
for (let div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}
