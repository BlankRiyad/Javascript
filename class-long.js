/* We can override the super class method by writing the same method
in the subclass and change the functionality.  */



class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log('Hi');
    }
}

class Student extends User {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    greet() {
        console.log("Hello");
    }
}

var student1 = new Student('Momin', 24, 'PSS');
var student2 = new User('Riyad', 23);

console.log(student1);
console.log(student2);

student1.greet();
student2.greet();