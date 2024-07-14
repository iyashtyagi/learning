import { useCallback } from "react";
import { useState } from "react";
import { memo } from "react";

export default function App(){

    const [count, setCount] = useState(0);

    const abc = useCallback(()=>{
        console.log("hello");
    },[]);

    return (
        <>
            <ChildComponent abc={abc}/>
            <button onClick={()=>{ setCount(count + 1)}}>Counter {count}</button>
        </>
    )
}

const ChildComponent = memo(({abc})=>{
    console.log("Child render");
    abc();

    return(
        <div>
            Button clicked
        </div>
    )
})