//Using methods from class
//Methods are functions without function keyword
//By adding methods to classes, we'll be able to create interactive objects
//using the classes as templates.

class VirtualPet {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    eat () {
        console.log("nom nom");
    }
}

var pet1 = new VirtualPet("Cat", 5);
pet1.eat();
console.log(pet1);