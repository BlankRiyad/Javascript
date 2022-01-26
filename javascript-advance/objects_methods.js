/*Instead of using separate variables to describe one Object, we can 
group those variables in one variable. It is called Objects. The information inside an object is known as
the object's properties. The properties go inside the object's curly braces{}. Similar to properties, we
can group ralated functions into objects. Functions inside an object are called the object's methods.  */


var myCereal = {
    name: "Trix",
    display: function() {
        this.name = "Cocoa";
        console.log(this.name);
    }
}

myCereal.display();