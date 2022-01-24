function changeOnInput() {
    log.innerText = input.value.length;
}

var input = document.querySelector("input");
var log = document.getElementById("log");
input.oninput = changeOnInput;