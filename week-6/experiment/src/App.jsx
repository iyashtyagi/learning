import { useState } from "react";
import { Header } from "./components/Header";
import { NameButton } from "./components/NameButton";

function App(){
    // const [name, setName] = useState("Yash Tyagi");
    const [name2, setName2] = useState("Tatiya bichu");


    return <>
        <NameButton />
        {/* <Header name = {name}/> */}
        <Header name = {name2}/>
    </>
}

export default App;