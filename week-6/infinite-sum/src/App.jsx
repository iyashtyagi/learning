import { useMemo } from "react";
import { useState } from "react";

export default function App(){

    const [num, setNum] = useState(0);
    const [count, setCount] = useState(0);

    const cachedSum = useMemo(()=>{
        const totalSum = (num*(num + 1))/2;
        return totalSum;
    },[num])

    function updateNum(e){
        setNum(parseInt(e.target.value))
    }

    return(
        <>
        <input onChange={updateNum}></input>
        <p>Sum is {cachedSum}</p>
        <button onClick={()=>{ setCount(count + 1)}}>Counter({count})</button>

        </>
    )

}