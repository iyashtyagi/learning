import { useState } from "react"
import { CountContext } from "./context";
import { useContext } from "react";

export default function App(){

    const [count, setCount] = useState(0);

    return(
        <div>
            <CountContext.Provider value={{count, setCount}}>
                <Count/>
            </CountContext.Provider>
        </div>
    )
}

function Count(){
    return(
        <div>
            <CountRender/>
            <Button/>
        </div>
    )
}

function CountRender(){
    const {count} = useContext(CountContext);
    return(
        <div>
            {count}
        </div>
    )
}

function Button(){
    const {count, setCount} = useContext(CountContext);

    return(
        <div>
            <button onClick={()=>{ setCount(count +1 )}}> Increase </button>
            <button onClick={()=>{setCount(count - 1)}}> Decrease </button>
        </div>
    )
}