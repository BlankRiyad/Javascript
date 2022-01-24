/* Once we've accessed an element with Javascript, we can get its attributes by adding a . followed
by the attrribute name. */


function changeAttribute() {
    var el = document.querySelector("img");
    el.src = "https://ithemes.com/wp-content/uploads/2016/10/Free-High-Quality-Images-Life-of-Pix.jpg";
    var changeInput = document.querySelector("input");
    changeInput.type = "checkbox";
    
}