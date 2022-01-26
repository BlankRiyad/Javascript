var printName = function() {
    console.log(this.name);
};

var sakib = {
    name: `Sakib`,
    age: 35
};

printName.call(sakib);