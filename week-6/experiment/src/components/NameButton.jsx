import { Header } from "./Header";
import { useState } from "react";

export function NameButton(){

    const [name, setName] = useState("Yash Tyagi");
    
    function buttonHandler(){
        const randomNum = Math.random();
        setName(randomNum);
    }

    return (
        <>
            <button onClick={buttonHandler}>Click me to change the name</button>
            <Header name = {name}/>
        </>
    )
}