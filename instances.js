/*Instances are nothing but object from a class.  */


class User {
    constructor(name) {
        this.name = name;
        this.isOnline = true;
    }
}

var user1 = new User("Arya");
user1.isOnline = false;
console.log(user1);

var user2 = new User("Bran");
console.log(user2);