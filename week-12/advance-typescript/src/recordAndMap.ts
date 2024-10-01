type UserType = {
    name : string,
    age : number
}
// without record or map
// type Users = {
//     [key: string] : UserType
// }

// Using Record
type Users = Record<string, UserType>;

const users:Users = {
    "yash@gmail.com" : {
        name : "yash",
        age : 19
    },
    "mohit@gmail.com" : {
        name : "mohit",
        age : 20
    }
}
console.log("Record:\n",users);

const usersMap = new Map<string, UserType>();

usersMap.set("yash@gmail.com", {
        name : "yash",
        age : 19
    }
);
usersMap.set("mohit@gmail.com", {
        name : "mohit",
        age : 20
    }
);

console.log("Map:\n",usersMap);

console.log("getFromMap:\n", usersMap.get("yash@gmail.com"));