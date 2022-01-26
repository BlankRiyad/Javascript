

var printName = function(v) {
    console.log(`${this.name} is ${v1}, ${v2} and ${v3}.`);
};

var sakib = {
    name: `Sakib`,
    age: 35
};

var v1 = `Handsome`;
var v2 = `All-Rounder`;
var v3 = `Best Player`;
var v = [v1, v2, v3];


// printName.call(sakib);



printName.apply(sakib, v);