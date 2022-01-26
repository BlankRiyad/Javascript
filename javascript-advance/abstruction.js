/* Abstruction allows other developers to use our class without having to know what low-level
methods it has or how they even work. Other developers can create a new object from our
Car class and use it just calling a few core methods. */


// class Coffeemaker {
//     heatWater() {
//         console.log(`Heating Water!`);
//     }

//     brew() {
//         console.log(`Adding water to ground!`);
//     }

//     filter() {
//         console.log(`Filtering Coffee!`);
//     }
// }
//     var coffeeMaker = new Coffeemaker();
//     coffeeMaker.heatWater();
//     coffeeMaker.brew();
//     coffeeMaker.filter();


class Coffeemaker {
    heatWater() {
        console.log(`Heating Water!`);
    }

    brew() {
        console.log(`Adding water to ground!`);
    }

    filter() {
        console.log(`Filtering Coffee!`);
    }

    makeCoffee() {
        this.heatWater();
        this.brew();
        this.filter();
    }
}

var coffeeMaker = new Coffeemaker();
coffeeMaker.makeCoffee();