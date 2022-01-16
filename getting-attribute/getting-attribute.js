function displayAttribute() {
    var el = document.querySelector("a");
    var link = el.getAttribute("href");
    var imageStyle = el.getAttribute("style");
    console.log(link);
    console.log(imageStyle);
    
}