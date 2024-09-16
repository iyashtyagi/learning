import { useEffect, useState } from "react";

export default function useIsOnline(n){
    const [online, setOnline] = useState(window.navigator.onLine);
    useEffect(()=>{
        
        // without interval

        // event handler
        // const eventHandler = (type) =>{
        //     type == 'online' ? setOnline(true) : setOnline(false);
        // }
        
        // window.addEventListener("online",(e)=>{eventHandler(e.type)});
        // window.addEventListener("offline",(e)=>{eventHandler(e.type)});
        
        // return ()=>{
        //     clearInterval(intervalId);
        //     window.removeEventListener("online",(e)=>{eventHandler(e.type)});
        //     window.removeEventListener("offline",(e)=>{eventHandler(e.type)});
        // };


        // with interval
        const intervalId = setInterval(()=>{
            setOnline(window.navigator.onLine);
        },n*1000);

        return ()=>{clearInterval(intervalId)};

    },[n]);
    return online;
}