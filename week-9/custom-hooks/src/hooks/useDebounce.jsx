import axios from "axios"
import { useEffect, useState } from "react";

export default function useDebounce(inputValue, time){
    const [result, setResult] = useState("");
    const url = "http://localhost:3000/search";

    useEffect(()=>{
        if(!inputValue){
            return;
        }

        const timeoutId = setTimeout(()=>{
            axios.get(url,{
                params: {
                    search : inputValue
                }
            }).then((res)=>{
                setResult(res.data.data);
                console.log(res.data);
            })
        }, time)

        return ()=>{
            clearTimeout(timeoutId);
        }

    }, [inputValue,time])
    return result;
}