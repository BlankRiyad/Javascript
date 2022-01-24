function changeColor() {
item.classList.toggle("pink");
}

var item = document.querySelector("div");
item.addEventListener("click", changeColor);