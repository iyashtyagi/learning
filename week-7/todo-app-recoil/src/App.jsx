import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { filterAtom, filteredTodos, todosArrayAtom } from "./store/atoms/todos";
import { useState } from "react";

let currentID = 21;

export default function App(){

    return(
        <>
            <RecoilRoot>
                <Todos/>
            </RecoilRoot>
        </>
    )
}

function Todos(){
    const todos = useRecoilValue(todosArrayAtom);

    return(<div>
        <CreateNewTodo/>
        <TodoFilter/>
        <TodosRender todos={todos}/>
    </div>)
}

function CreateNewTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const setTodos = useSetRecoilState(todosArrayAtom);

    function onCLickHander(){
        setTodos(todos=>[...todos,{id:currentID++, title, description, completed: false}]);
        setTitle("");
        setDescription("");
    }

    return(
        <div>
            <input onChange={(e)=>setTitle(e.target.value)} placeholder="Title" value={title} />
            <input onChange={e=>setDescription(e.target.value)} placeholder="Description" value={description} />
            <button onClick={onCLickHander}>Submit</button>
        </div>
    )
}

function TodosRender({todos}){
    return(<div>
        <table>
            <thead>     
                <tr>
                    <th>S.No.</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo)=>{
                    return(<tr key={todo.id}>
                        <td> {todo.id} </td>
                        <td> {todo.title} </td>
                        <td> {todo.description} </td>
                        <td> <button>{todo.completed?"Done":"Mark as done"}</button> </td>
                    </tr>)
                })}
            </tbody>

        </table>
    </div>
)}

function TodoFilter(){
    return(
        <div>
            <TodoFilterInput/>
            <FilteredTodoRender/>
        </div>
    )
}


function TodoFilterInput(){
    const str = useSetRecoilState(filterAtom);
    return(
        <div>
            <p> Search here:  <input onChange={e=>str(e.target.value)} placeholder="search"/> </p>
        </div>
    )
}


function FilteredTodoRender(){
    const todos = useRecoilValue(filteredTodos);
    console.log(todos);
    
    return(<div>
        {todos?<TodosRender todos={todos}/>:null}
    </div>)
}

