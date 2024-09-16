import { useEffect, useState } from "react";

export default function useMousePointer(){
    const [position, setPosition] = useState({x:0, y:0});

    function movementHandler(e){
        setPosition({x:e.x, y: e.y});
    }

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{movementHandler(e)});
        return ()=>{
            window.removeEventListener("mousemove", (e)=>{movementHandler(e)});
        }
    },[])

    return position;
}