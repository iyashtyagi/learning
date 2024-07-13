import { useState } from "react"

export function CreateTodo({todos,setTodos}){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function onClickHandler(e){
        setTodos([...todos, {id:4,title,description,completed: false}]);
        setTitle("");
        setDescription("");
    }

    function titleUpdator(e){
        setTitle(e.target.value);
    }

    function descriptionUpdator(e){
        setDescription(e.target.value);
    }

    return(
        <div>
            <input onChange={titleUpdator} placeholder="Title" type="text" value={title}/>
            <input onChange={descriptionUpdator} placeholder="Description" type="textare" value={description}/>
            <button onClick={onClickHandler}> Create </button>
        </div>
    )
}