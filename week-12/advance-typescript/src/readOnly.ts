type UserObj = {
    readonly name : string, //one way
    age: number
}

const user: UserObj= {
    name : "yash",
    age : 56
}

// another way
const user4: Readonly<UserObj>= {
    name : "yash",
    age : 56
}

// now we can't update name
// user.name = "yash";

// but age can 
user.age = 45;

