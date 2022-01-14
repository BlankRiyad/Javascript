/* If we want to access different elements of the same class,
like the p element of class .prompt, we specify "p.prompt" inside parentheses.
To access an element with two classes, we add the other class right after the first. Here, ".prompt.update" */


function publish() {
    var el = document.querySelector("p.prompt");
    el.innerHTML = "Website Published";
    var next = document.querySelector("p.prompt.update");
    next.innerHTML = "Your Website";
}