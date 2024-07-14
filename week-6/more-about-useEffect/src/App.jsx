import { useEffect, useState } from "react"
import axios from 'axios'

export default function App(){

    return(
        <>
            <Todo id={3}></Todo>
        </>
    )
}


function Todo({id}){
    const [todo, setTodo] = useState({});

    useEffect(()=>{
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
        .then((res)=>{
            setTodo(res.data.todo);
        })
    },[])

    return (
        <div key={todo.id}>
            <p><b>Title: </b>{todo.title}</p>
            <p><b>Description: </b>{todo.description}</p>
            <button>{todo.completed?"Completed":"mark as done"}</button>
        </div> 
    )

}