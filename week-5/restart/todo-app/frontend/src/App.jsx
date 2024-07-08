import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App(){

  const [todos, setTodos] = useState([
        {
            "title": "Buy groceries",
            "description": "Milk, Bread, Cheese, Eggs, Vegetables",
            "completed": false
        },
        {
            "title": "Read a book",
            "description": "Finish reading 'To Kill a Mockingbird'",
            "completed": false
        },
        {
            "title": "Clean the house",
            "description": "Vacuum, dust, and mop all rooms",
            "completed": false
        },
        {
            "title": "Exercise",
            "description": "Go for a 30-minute run",
            "completed": true
        },
        {
            "title": "Write blog post",
            "description": "Write and publish blog post on JavaScript tips",
            "completed": false
        },
        {
            "title": "Attend meeting",
            "description": "Project meeting with team at 2 PM",
            "completed": true
        },
        {
            "title": "Fix bugs",
            "description": "Resolve reported issues in the codebase",
            "completed": false
        },
        {
            "title": "Call mom",
            "description": "Check in with mom and see how she's doing",
            "completed": true
        },
        {
            "title": "Plan vacation",
            "description": "Research and plan itinerary for upcoming trip",
            "completed": false
        },
        {
            "title": "Prepare presentation",
            "description": "Create slides for Monday's client presentation",
            "completed": false
        }
    ])

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App;