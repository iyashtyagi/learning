import {RecoilRoot, useRecoilValueLoadable} from 'recoil'
import { todoAtomsFamily } from './atoms'

export default function App(){ 

    return(<>

        <RecoilRoot>
            <Todo id={1}/>
            <Todo id={2}/>
            <Todo id={3}/>
            <Todo id={4}/>
            <Todo id={5}/>
        </RecoilRoot>
        
    </>)
}

function Todo({id}){
    const currentTodo = useRecoilValueLoadable(todoAtomsFamily(id));
    
    return(
        <> 
        {currentTodo.state == "loading"? 
            <div> loading... </div>:
            <div>
                {currentTodo.contents.id}
                <p><b>Title: </b>{currentTodo.contents.title}</p>
                <p><b>Description: </b>{currentTodo.contents.description}</p>
            </div>}
        </>
    )
}