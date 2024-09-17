import './App.css'

function App() {
    return (<div>
        <Todo title="hi" description="this is the description" done={false}/>
    </div>)
}

interface TodoProp{
    title : string,
    description : string,
    done : boolean
}

function Todo(props:TodoProp){
    return(<div>
        <h1>Title : {props.title}</h1>
        <h3>Description : {props.description}</h3>
        <button>{props.done?"Completed":"Mark as done"}</button>
    </div>)
}

export default App
