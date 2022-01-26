
//Builiding objects with class and using them.
//Using constructor to make the demo for creating ultimate object later.
//This keyword always mention the function on which we are using it.

class Building {
    constructor(doors, windows) {
        this.doors = doors;
        this.windows = windows;
    }
}

var building1 = new Building(5, 7);
var building2 = new Building(2, 5);
console.log(building1);
console.log(building2.windows);