"use strict";
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
    hello() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
const e = new Employee("Yash", 22);
console.log(e.name);
e.greet("hello there");
e.hello();
