


const alphabet = [`A`, `B`, `C`, `D`, `E`, `F`];
const number = [1, 2, 3, 4, 5, 6]; 


/* Array destructuring */
const [a, b, c] = alphabet; 

console.log(a);
console.log(b);
console.log(c);



/* Easiest way to put out a data. */
const [,,,d] = alphabet;

console.log(d);


/* Rest operator */
const [,,,, ...rest] = alphabet;

console.log(rest);



/* Spread operator */
const newArray = [...alphabet, ...number];

console.log(newArray);

/* Another way of combining */

const combineArray = alphabet.concat(number);

console.log(combineArray);


