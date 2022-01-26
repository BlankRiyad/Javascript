var printPlayerNameFunction = function(obj) {
    obj.printPlayerName = function() {
        console.log(this.name);
    }
};

var sakib = {
    name: `Sakib`,
    age: 35,
};

var tamim = {
    name: `Tamim`,
    age: 24,
};

printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);

sakib.printPlayerName();
tamim.printPlayerName();