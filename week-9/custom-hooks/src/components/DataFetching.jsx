import useTodos from "../hooks/useTodos";

export default function DataFetching() {
    const url = "http://localhost:3000/todos";
    const {todos, laoding} = useTodos(10, url);

    if(laoding){
        return <div>
            Loading...
        </div>
    }

    return <div>
        {todos.map(todo => <Track todo ={todo}/>)}
    </div>
    
}

function Track({todo}){
    return<div>
        Title : {todo.title}
        <br />
        Description : {todo.description}
    </div>
}