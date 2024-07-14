import { useEffect, useState } from "react"

export default function App(){
    const [todos, setTodos] = useState([]);

    return(
        <>
            <Todo todos = {todos} setTodos = {setTodos} />
        </>
    )
}


function Todo({todos, setTodos}){
    console.log("here we are",todos);

    useEffect(()=>{
        setInterval(()=>{
            
            fetch("https://sum-server.100xdevs.com/todos")
                .then(async(res)=>{
                    const json = await res.json();
                    setTodos(json.todos);
                })
        },1000)
    },[])

    return(
        <div>
            {todos.map((todo)=>{
                return <div key={todo.id}>
                    <p><b>Title: </b>{todo.title}</p>
                    <p><b>Description: </b>{todo.description}</p>
                    <button> {todo.completed?"Completed":"Mark as completed"} </button>
                </div>
            })}
        </div>
    )
}