/* In OOP, objects have the same method calls but different
behaviors. We call that polymorphism.To apply polymorphism
and how objects behave, we override object methods with the right
behavior. Similarly, we override subclass methods when needed. */

class Car {
    alertOpenDoor() {
        console.log(`Close four Doors.`);
    }
}

var coupe = new Car();

coupe.alertOpenDoor = function() {
    console.log(`Open Two Doors.`);
};


class Private extends Car {
    alertOpenDoor() {
        console.log(`Locking Every Doors!`);
    }
}

var private = new Private();
private.alertOpenDoor();
coupe.alertOpenDoor();