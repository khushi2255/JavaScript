let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn was clicked");
    let a = 25;
    a++;
    console.log(a); //26
};



let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
};