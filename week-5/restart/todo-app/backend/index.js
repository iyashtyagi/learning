const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const {inputDataValidator, inputIdValidator} = require("./dataTypesValidator");
const { todo } = require("./db");

const port = 3000;
const dbConnectionString = process.env.DB_CONNECTION_STRING;
const app = express();
app.use(express.json());

mongoose.connect(dbConnectionString);

app.get("/todos",async (req,res)=>{
    const todos = await todo.find({}); 
    res.json({status: 200, data : todos})
})

app.post("/todo", inputDataValidator, async(req,res)=>{
    const {title, description} = req.body;

    const isDone = await todo.create({title,description,completed : false});
    console.log(isDone);

    res.json({status : 202, data: {"msg" : "added successfully ",id: isDone._id}})
})

app.put("/completed", inputIdValidator, async (req,res)=>{
    const {id} = req.body;
    const specificTodo = await todo.findByIdAndUpdate(id,{completed : true});
    if(!specificTodo){
        return res.status(401).json({"msg" : "Something went wrong"});
    }
    res.json({status: 202, msg : "Marked as completed"});
})

app.put("/remove-todo", inputIdValidator, async(req,res)=>{
    const {id} = req.body;
    const result = await todo.findByIdAndDelete(id);
    if(!result){
        res.status(401).json({"msg": "Todo doesn't exist"});
        return;
    }
    res.json({"msg":"done"})
})

app.listen(port, () => {
    console.log(`Server started: ${port}`);
})