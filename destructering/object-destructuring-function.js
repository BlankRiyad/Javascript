/* while I am sending object as the parameter it is grabbing 
what its need from the object. It is easier in destructuring.  */

const person = {
    name: `Alam`,
    age: 34,
    address: {
        city: `LA`,
        state: `LA`
    }
};


var func = ({name, age}) => {
    console.log(`My name is ${name} and I am ${age} years old.`);
};

func(person);

