import {RecoilRoot, useRecoilValue} from 'recoil'
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
    const currentTodo = useRecoilValue(todoAtomsFamily(id));

    return(
        <div>
            {currentTodo?.id}
            <p><b>Title: </b>{currentTodo?.title}</p>
            <p><b>Description: </b>{currentTodo?.description}</p>
        </div>
    )
}