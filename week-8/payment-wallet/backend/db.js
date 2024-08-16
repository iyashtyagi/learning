const mongoose = require("mongoose");
const { DB_CONNECTION_STRING } = require("./config");

const userSchema = mongoose.Schema({
    email : String,
    firstName : String,
    lastName : String,
    password : String
})

const User = mongoose.model("user", userSchema);

const dbConnect = async () =>{
    const dbUrl = DB_CONNECTION_STRING;
    await mongoose.connect(dbUrl);
    console.log("Database connected successfully");
} 

module.exports ={
    User,
    dbConnect
}