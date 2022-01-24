function updateValue() {
    log.innerText = input.value;
}

var input = document.querySelector("input");
var log = document.getElementById("log");
input.onchange = updateValue;