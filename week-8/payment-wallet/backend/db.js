const mongoose = require("mongoose");
const { DB_CONNECTION_STRING } = require("./config");

const userSchema = mongoose.Schema({
    email : {
        type : String,
        unique : true,
        trim : true,
        require : true
    },
    firstName : {
        type : String,
        trim : true,
        require : true
    },
    lastName :  {
        type : String,
        trim : true,
        require : true
    },
    password :  {
        type : String,
        require : true
    }
})

const accountSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId, //reference to User model
        ref : 'User',
        require : true
    },
    balance : {
        type : Number,
        require : true
    }
})

const User = mongoose.model("user", userSchema);
const Account = mongoose.model("account", accountSchema);

const dbConnect = async () =>{
    const dbUrl = DB_CONNECTION_STRING;
    await mongoose.connect(dbUrl);
    console.log("Database connected successfully");
} 

module.exports ={
    User,
    Account,
    dbConnect
}