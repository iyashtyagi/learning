import { useEffect } from "react";

export default function useInterval(fn, time){
    useEffect(()=>{
        const intervalId = setInterval(fn, time);
        return ()=>{
            clearInterval(intervalId);
        }
    },[time]);
}