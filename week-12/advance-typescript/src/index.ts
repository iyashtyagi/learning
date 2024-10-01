interface User{
    id : string,
    name : string,
    age : number,
    email : string,
    password : string
}

// Pick
type UpdateProps = Pick<User, 'name' | 'age' | "email">;

// Partial 
type UpdatePropsOptinal = Partial<UpdateProps>;
 
function updateUser(updatedProps:UpdatePropsOptinal){
    // hit the db
    console.log(`Updated user: \nName: ${updatedProps.name} \nAge: ${updatedProps.age} \nEmail: ${updatedProps.email}`);
}

const user1 = { 
    name : "yash",
    age : 23,
    email : "contactyashtyagi@gmail.com"
}

const user2 = { 
    name : "yash",
    age : 23,
}

updateUser(user1);
updateUser(user2);
