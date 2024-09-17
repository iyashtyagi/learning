// max-value in an array

function maxValue(arr:number[]):number{
    let max = 0;
    for(let i= 0; i<arr.length; i++){
        max = max>arr[i]?max:arr[i];
    }
    return max;
}

console.log(maxValue([1,69,5,45]));


// filter the array
interface User {
    firstName : string;
    lastName : string;
    age : number
}

const users:User[] = [
    {"firstName": "Aarav", "lastName": "Reddy", "age": 17},
    {"firstName": "Anika", "lastName": "Singh", "age": 32},
    {"firstName": "Ishaan", "lastName": "Singh", "age": 22},
    {"firstName": "Vihaan", "lastName": "Reddy", "age": 22},
    {"firstName": "Diya", "lastName": "Sharma", "age": 2},
    {"firstName": "Riya", "lastName": "Nair", "age": 16},
    {"firstName": "Aditya", "lastName": "Verma", "age": 5},
    {"firstName": "Vivaan", "lastName": "Nair", "age": 33},
    {"firstName": "Anika", "lastName": "Thakur", "age": 51},
    {"firstName": "Diya", "lastName": "Gupta", "age": 38}
]

function legalUsers(users:User[]):User[]{
    const filteredUser : User[] = [];
    for (let i = 0; i < users.length; i++) {
        users[i].age>18?filteredUser.push(users[i]):null;
    }
    return filteredUser;
}

console.log(legalUsers(users));