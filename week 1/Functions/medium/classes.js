class Animal{
    constructor(name,age,speaks){
        this.name = name;
        this.age = age;
        this.speaks = speaks;
    }

    name(){
        return this.name;
    }

    age(){
        return this.age;
    }

    speaks(){
        return this.speaks;
    }

}

let dog = new Animal("Doggie",12,"bhow bhow");
let cat = new Animal("Billi", 14, "meow meow");

function test(animalName){
    console.log(`Name: ${animalName.name}\nAge: ${animalName.age}\nSpeaks: ${animalName.speaks}`)
}

test(dog);
test(cat);