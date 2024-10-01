"use strict";
function updateUser(updatedProps) {
    // hit the db
    console.log(`Update user: \nName: ${updatedProps.name} \nAge: ${updatedProps.age} \nEmail: ${updatedProps.email}`);
}
const user = {
    name: "yash",
    age: 23,
    email: "contactyashtyagi@gmail.com"
};
updateUser(user);
