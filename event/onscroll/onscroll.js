function changeOnScroll() {
    textarea.style.backgroundColor = "aliceBlue";
    
}

var textarea = document.querySelector("textarea");
textarea.onscroll = changeOnScroll;