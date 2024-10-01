interface User{
    id : string,
    name : string,
    age : number,
    email : string,
    password : string
}

// Pick

type UpdateProps = Pick<User, 'name' | 'age' | "email">;

function updateUser(updatedProps:UpdateProps){
    // hit the db
    console.log(`Update user: \nName: ${updatedProps.name} \nAge: ${updatedProps.age} \nEmail: ${updatedProps.email}`);
}

const user = { 
    name : "yash",
    age : 23,
    email : "contactyashtyagi@gmail.com"
}

updateUser(user);