document.getElementById("photo").addEventListener("touchstart", displayMessage);
document.getElementById("photo").addEventListener("touchcancel", displayName);
document.getElementById("photo").addEventListener("touchend", displayError);

function displayMessage() {
    document.getElementById("message").innerHTML = "Release to find the name!";
    
}

function displayName() {
    document.getElementById("message").innerHTML = "Bodmash Bag";
    
}

function displayError() {
    document.getElementById("message").innerHTML = "ERROR!"
    
}