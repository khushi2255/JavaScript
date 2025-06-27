let btn = document.querySelector("#btn");

btn.onclick = (e) => {

    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);

};

let div = document.querySelector("div");

div.onmouseover = (evt) => {

    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);

};




// event listener : best practice to use event listener


let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {

//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);

// });




// Remove eventlistener

btn1.addEventListener("click", () => {
    console.log("button1 was clicked-handler1");
});


btn1.addEventListener("click", () => {
    console.log("button1 was clicked-handler2");
});


const handler3 = () => {
    console.log("button1 was clicked-handler3");
};
btn1.addEventListener("click", handler3);



btn1.addEventListener("click", () => {
    console.log("button1 was clicked-handler4");
});

btn1.removeEventListener("click", handler3);