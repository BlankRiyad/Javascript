/* we use "bind" in  javascript explicit binding to creat a instance of a function call.
so, first put it in a variable and then call it separately.   */


var printName = function(v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2} and ${v3}.`);
};

var sakib = {
    name: `Sakib`,
    age: 35
};

var v1 = `Handsome`;
var v2 = `All-Rounder`;
var v3 = `Best Player`;


// printName.call(sakib);



var newFunc = printName.bind(sakib, v1, v2, v3);
newFunc();