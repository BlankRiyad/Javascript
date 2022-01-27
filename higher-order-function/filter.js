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

const eligible = ages.filter((age) => {
    if(age >= 21) {
        return true;
    }
});


/* more shorter form of this code
const eligible = ages.filter(age => age >= 21);
 */
console.log(eligible);