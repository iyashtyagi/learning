// Type

type User = {
    firstName : string;
    lastName : string;
    age : number;
}

// Interface

// interface User2{
//     firstName : string;
//     lastName : string;
//     age : number;
// }


// Unions 
type arg = number | string | null;

function greet(id : arg):void{
    console.log(`hi there,${id}`);
}

greet(1);
greet("1");

// Intersection
type Employee = {
    name : string;
    startDate : Date;
}

interface Manager{
    name : string;
    department : string;
}

type TechLead = Employee & Manager;

const techLead : TechLead = {
    name : "Yash",
    startDate : new Date,
    department : "Admin"
}

console.log(techLead);