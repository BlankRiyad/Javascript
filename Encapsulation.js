/* In OOP, we group together ralated data and functions in the same object.
We call this encapsulation and it's the key principle of OOP-object
oriented programming. */


var rectangle = {
    base: 3,
    height: 4,
    getArea: function() {
        return rectangle.base * rectangle.height;
    }
};

rectangle.base = 10;
var area = rectangle.getArea();

console.log(area);