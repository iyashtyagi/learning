"use strict";
const users = {
    "yash@gmail.com": {
        name: "yash",
        age: 19
    },
    "mohit@gmail.com": {
        name: "mohit",
        age: 20
    }
};
console.log("Record:\n", users);
const usersMap = new Map();
usersMap.set("yash@gmail.com", {
    name: "yash",
    age: 19
});
usersMap.set("mohit@gmail.com", {
    name: "mohit",
    age: 20
});
console.log("Map:\n", usersMap);
console.log("getFromMap:\n", usersMap.get("yash@gmail.com"));
