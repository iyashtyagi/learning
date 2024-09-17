interface Person{
    name : string,
    age : number,
    greet(phrase: string):void;
}

class Employee implements Person{
    name : string;
    age: number; 

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }

    hello():void{
        console.log(`Hello, I'm ${this.name}`)
    }
}

const e = new Employee("Yash",22);
console.log(e.name);

e.greet("hello there");
e.hello()