let ages = [20, 30, 25, 19, 53, 18, 10, 35, 29, 39, 12];

/* normal procedures. */
let canDrink = [];

for( let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
};

console.log(canDrink);


/* Using filter method! */

// const eligible = ages.filter((age) => {
//     if(age >= 21) {
//         return true;
//     }
// });


const eligibility = ages
.filter(age => age >= 21);

console.log(eligibility);


// /* map method of this code
// ages.map(age => age >= 21);
// we can combine filter output with map method. */

// /* more shorter form of this code  */
// const eligible = ages
// .filter(age => age >= 21)
// .map(age => ({Adult: age}))
// .filter(obj => obj.Adult >= 30);

// console.log(eligible);