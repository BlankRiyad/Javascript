


const human = {
    id: `man`,
    number: 556746,
    age: 67
};


const person = {
    name: `Alam`,
    age: 35,
    address: {
        city: `LA`,
        state: `LA`
    }

};

const {name: firstName, age, favouriteFood = `Rice`, ...rest} = person;

const {address: {city: town}} = person;

const hybridPerson = {...human, ...person};


/* Example of concate */
console.log(hybridPerson);

/* Example of naming */
console.log(firstName);

/* Example of simplified */
console.log(age);
console.log(favouriteFood);

/* Example of rest operator */
console.log(rest);

/* Example of nesting */
console.log(town);