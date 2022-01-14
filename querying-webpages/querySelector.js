/* If we want to retrieve individual HTML elements, we use the 
querySelector() method and then to select a specific element, we add a selector inside parenthesis like "p".
we can control by .innerHTML property. To select a ID we use "#IDname" and for class ".classname".
If multiple same element we can access only the first one. */




function publish() {
    var el = document.querySelector("p");
    var text = document.querySelector("#prompt");
    var heading = document.querySelector(".heading");
    var headingCommon = document.querySelector("h4");
    headingCommon.innerHTML = "Only first one is afffected!"
    el.innerHTML = "Website Published!";    
    heading.innerHTML = "First Heading!"
    text.innerHTML = "Lorem ipsExcepteur sint occaecat cupidatat non pro officia deserunt mollit anim id est laborum."

}