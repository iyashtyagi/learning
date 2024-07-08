function CreateTodo(){

    function newTodoHandler(){
        // handler 
    }

    return (
        <div>
            <input style = {{
                padding : 10,
                margin : 10
            }} type="text" placeholder="title"></input> <br />
            <input style = {{
                padding : 10,
                margin : 10
            }} type="text" placeholder="description"></input> <br />
            <button style = {{
                padding : 10,
                margin : 10
            }} onClick={newTodoHandler}>Create</button>
        </div>
    )
}


export default CreateTodo; 