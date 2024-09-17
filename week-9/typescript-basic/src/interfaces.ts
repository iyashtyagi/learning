interface User{
    firstName : string,
    lastName : string,
    email? : string, // ? this means optional
    age : number
}

function isUserLegal(user:User){
    if(user.age>= 18){
        return true;
    }
    return false;
}

function greetUser(user:User){
    console.log(`Hey ${user.firstName}`)
}

const data = {firstName: "Yash", lastName:"Tyagi", age:15}

console.log(isUserLegal(data));
greetUser(data);