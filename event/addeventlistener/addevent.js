function changeWidth() {
    item.classList.toggle("width");
    
}

function changeHeight() {
    item.classList.toggle("height");
    
}

var item = document.querySelector("div");
var el = document.querySelectorAll("button");

el[0].addEventListener("click", changeHeight);
el[0].addEventListener("click", changeWidth);

el[1].addEventListener("click", changeHeight);
el[2].addEventListener("click", changeWidth);