const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const {inputDataValidator, inputIdValidator} = require("./dataTypesValidator")

const port = 3000;
const dbConnectionString = process.env.DB_CONNECTION_STRING;
const app = express();
app.use(express.json());

mongoose.connect(dbConnectionString);

const todos = [{
    title : "Go to gym",
    description : "Go to gym from 5-7 AM",
    completed : false
},{
    title : "Study DSA",
    description : "Study DSA from 9-11 AM",
    completed : true
}]

app.get("/todos",(req,res)=>{
    // get all the todos from the database
    res.json({status: 200, data : todos})
})

app.post("/todo", inputDataValidator, (req,res)=>{
    const {title, description} = req.body;
    // validate the data
    // add todo in the database
    todos = [...todos, {title, description, completed : false}];
    res.json({status : 202, data: {"msg" : "added successfully "}})
})

app.put("/completed", inputIdValidator, (req,res)=>{
    const {id} = req.body;
    // validate the input
    // check whether todo with that specific id exist or not
    // if yes then update it accordinly

    res.json({status: 202, data: todos});

})

app.listen(port, () => {
    console.log(`Server started: ${port}`);
})