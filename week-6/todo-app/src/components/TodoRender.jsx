export function TodoRender({todos}){
    return(
        <div>
            {todos.map((todo)=>{
                return (
                    <div key={todo.id}> 
                        <p><b>Title: </b>{todo.title}</p>
                        <p><b>Description: </b>{todo.description}</p>
                        <button>{todo.completed?"completed" : "mark as complete"}</button>
                        <hr />
                        <br />
                    </div>
                )
            })}
        </div>
    )
}