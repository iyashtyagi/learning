import { useState } from "react";
import { TodoRender } from "./components/TodoRender";
import { CreateTodo } from "./components/CreateTodo";

function App(){

    const [todos, setTodos] = useState([
        {
            "id": 1,
            "title": "Buy groceries",
            "description": "Milk, bread, eggs, and fruits",
            "completed": false
        },
        {
            "id": 2,
            "title": "Finish project report",
            "description": "Complete the final draft and review it",
            "completed": false
        },
        {
            "id": 3,
            "title": "Workout",
            "description": "30 minutes of cardio and 15 minutes of strength training",
            "completed": true
        }
    ]);

    return <>
        <CreateTodo todos={todos} setTodos={setTodos}/>
        <TodoRender todos={todos}/>
    </>

}

export default App;