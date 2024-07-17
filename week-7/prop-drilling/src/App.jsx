import { useState } from "react";


export default function App(){
    
    return(
        <div>   
            <Count/>
        </div>
    )
    
    
}
    
function Count(){
    const [count, setCount] = useState(0);
    return <div>
        {count}
        <Buttons count={count} setCount={setCount}/>
    </div>
}

function Buttons({count, setCount}){
    return(
        <div>
            <button onClick={()=>{setCount(count + 1)}}>Increase</button>
            <button onClick={ () => {setCount(count - 1)}}> Decresae</button>
        </div>
    )
}