/* With arrow function we don't need function 
keyword or the function name. We put the function in a 
variable so that we can call the function. We start the function
with parenthesis which can contain parameters. After we set the arrow 
keyword. Then inside the braces the function goes. */

const getPrice = (total) => {
    const discount = .10;
    return total - (discount * total);
}

console.log(getPrice(50));