"use strict";
class Greeter {
    constructor(user) {
        this.user = user;
    }
    greet() {
        return `Hello, ${this.user.name}! Your user ID is ${this.user.id}.`;
    }
}
const user = { id: 1, name: "Dude" };
const greeter = new Greeter(user);
console.log(greeter.greet());
