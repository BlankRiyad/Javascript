/* We can object without using class. The method is "var name = Object.create(object name);" */


var car = {
    startEngine: function(){
        console.log('Starting Engine');
    }
};

var hybrid = Object.create(car);

hybrid.charge = function() {
    console.log('Using fuel to charge battery');
};

hybrid.startEngine();
hybrid.charge();