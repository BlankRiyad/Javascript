function changeColor() {
item.classList.toggle("pink");
}


function changeonscroll() {
textarea.onscroll.backgroundColor = "aliceBlue";
}
var item = document.querySelector("div");
item.ondblclick = changeColor;

var textarea = document.querySelector("textarea");
textarea.onscroll = changeonscroll;