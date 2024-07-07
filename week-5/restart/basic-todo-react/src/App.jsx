import { useState } from "react";

function App(){

    const [todos, setTodos] = useState([{
        title : "Go to gym",
        description : "Go to gym from 5-7 AM",
        completed : false
    },{
        title : "Study DSA",
        description : "Study DSA from 9-11 AM",
        completed : true
    }]);

    function addNewData(){
        setTodos([...todos, {
            title : "Random todo",
            description : "Just a new Todo"
        }])
    }
 
    return (
        <div>
            <button onClick={addNewData} >Add new Todo</button>
            <div>
                {todos.map(function(todo){
                    console.log(todo);
                    return <Todo todo = {todo}></Todo>
                })}
            </div>
        </div>
    )
}

function Todo(props){
    const todo = props.todo;
    console.log(todo);
    return(
        <div>
            <h1> {todo.title} </h1>
            <h2> {todo.description}</h2>
            <hr /> 
        </div>
    )
}


export default App;