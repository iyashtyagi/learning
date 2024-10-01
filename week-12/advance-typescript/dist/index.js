"use strict";
function updateUser(updatedProps) {
    // hit the db
    console.log(`Updated user: \nName: ${updatedProps.name} \nAge: ${updatedProps.age} \nEmail: ${updatedProps.email}`);
}
const user1 = {
    name: "yash",
    age: 23,
    email: "contactyashtyagi@gmail.com"
};
const user2 = {
    name: "yash",
    age: 23,
};
updateUser(user1);
updateUser(user2);
