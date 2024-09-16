import { useState } from "react"
import useDebounce from "../hooks/useDebounce";

export default function SearchBar(){
    
    const [inputValue, setInputValue] = useState('');
    const result = useDebounce(inputValue, 500);

    return <div>
        <input placeholder="Search..." onChange={(e)=>{setInputValue(e.target.value)}} value={inputValue} />
        <br />
        {inputValue?result:<></>}
    </div>
}
