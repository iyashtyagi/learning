import { useState } from "react"

export function App(){

    return(<>
        <ParaGenerator />
    </>)
}

function ParaGenerator(){
    const words = ["cat", "dog", "house", "tree", "car", "ball", "sky", "sun", "rain", "road","bird", "flower", "book", "pen", "hat", "shoe", "door", "chair", "fish", "grass"];

    const [para, setPara] = useState("");
    const [num, setNum] = useState("");

    function gen(){
        console.log(num);
        if(!num){
            return;
        }

        const wordsLength = words.length;
        let paragraph = "";

        for(let i =0; i<num; i++){
            const randomWord = Math.floor(Math.random()*wordsLength)
            paragraph += ` ${words[randomWord]}`;
        }

        setPara(paragraph);
    }

    return(
        <div>
            <h1>Para Generator</h1>
            <input onChange={(e)=>{setNum(Number(e.target.value))}} placeholder="Enter number of words"/>
            <button onClick={gen}> Generate </button>
            <Paragraph paragraph={para}/>
        </div>
    )
}

function Paragraph({paragraph}){
    return(<div>
        <p>{paragraph}</p>
    </div>)
}