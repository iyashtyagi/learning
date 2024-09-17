// const x: number = 1;
// console.log(x);

// function
function greet(firstName:string){
    console.log(`Hello ${firstName}`);
}

greet("Yash");


// sum of 2 number
function sum(num1:number, num2:number):number{
    return num1 + num2;
}

const value = sum(1,3);
console.log(value);

// age checker
function isLegal(age:number):boolean{
    if(age>=18){
        return true;
    }
    return false;
}

// function that takes another function as an input, and runs it after 1 second
function func1():void{
    console.log("from func1")
}

function func2(fn:Function):void{
    setTimeout(()=>{fn()},1000);
}

func2(func1);
