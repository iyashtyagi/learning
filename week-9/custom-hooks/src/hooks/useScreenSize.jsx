import { useEffect, useState } from "react"

export default function useScreenSize(){
    const [size, setSize] = useState({width:window.innerWidth, height:window.innerHeight});
    function eventHandler(e){
        setSize({width:e.target.innerWidth, height:e.target.innerHeight})
    }

    useEffect(()=>{
        window.addEventListener("resize",(e)=>{eventHandler(e)})

        return window.removeEventListener("resize",(e)=>{eventHandler(e)});
    },[])

    return size;
}