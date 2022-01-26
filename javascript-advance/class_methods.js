//Using methods from class
//Methods are functions without function keyword
//By adding methods to classes, we'll be able to create interactive objects
//using the classes as templates.

class VirtualPet {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat (food) {
        if (food === "treats"){
            console.log("nom nom");
        } else {
            console.log("Discard");
        }
    }
}

var pet1 = new VirtualPet("Cat", 5);
pet1.eat("treats");
console.log(pet1);