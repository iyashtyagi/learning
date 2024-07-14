import { useEffect, useState } from "react"
import axios from 'axios'

export default function App(){

    const [todoId, setTodoId] = useState("1");

    function todoIdUpdator(e){
        setTodoId(e.target.textContent);
    }

    return(
        <>
            <button onClick={todoIdUpdator}>1</button>
            <button onClick={todoIdUpdator}>2</button>
            <button onClick={todoIdUpdator}>3</button>
            <Todo id={todoId}></Todo>
        </>
    )
}


function Todo({id}){
    console.log(id);
    const [todo, setTodo] = useState({});

    useEffect(()=>{
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then((res)=>{
            setTodo(res.data.todo);
        })
    },[id])

    return (
        <div key={todo.id}>
            <p><b>Title: </b>{todo.title}</p>
            <p><b>Description: </b>{todo.description}</p>
            <button>{todo.completed?"Completed":"mark as done"}</button>
        </div> 
    )

}