let userArray = [{firstName : "Yash Tyagi", gender: "male"}, {firstName : "Mohit", gender: "male"}, {firstName : "Kanika", gender: "female"},{firstName : "Yashika", gender: "female"}, {firstName : "Rohit", gender: "male"}]

for(let i = 0; i<userArray.length; i++){
    if (userArray[i]["gender"]=== "male") {  //we can retrive data from objects using both `[""]` and `.`
        console.log(`${userArray[i].firstName}`)
    }
}