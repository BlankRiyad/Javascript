


var sumMultiply = (a, b) => {
    return [a+b, a*b, b/a];
}

/* trditional javascript */

const array = sumMultiply(4, 5);

console.log(array);

/* Using object destructuring */

const [sum, multiply] = sumMultiply(5, 7);

console.log(sum);
console.log(multiply);

/* setting default value */

const [,,division = `No division`] = sumMultiply(5, 6);

console.log(division);

