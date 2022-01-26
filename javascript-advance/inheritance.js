/* We can use a class feature on another class
by coding extends after the class name followed by previous class name.
If a subclass doesn't have a constructor() method, the superclass's 
constructor becomes the default constructor.
After creating a subclass we need to call suuper() so that we can have the same 
properties of superclass. */


class Animal {
    constructor(name) {
        this.name = name;
    }

    eat(food) {
        console.log(this.name + "is eating " + food);
    }
}

class Dog extends Animal {
    constructor(name, weight) {
        super(name);
        this.weight = weight;
    }
}

class Bird extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

class Pet extends Animal {
}

var dog = new Dog("Monty", 4);
var bird = new Bird("Pegion", 2);
var pet = new Pet("Cat");
dog.eat("Beef");
bird.eat("Rice");

console.log(bird);

console.log(dog);

console.log(pet);

console.log(bird.age);
console.log(dog.weight);
