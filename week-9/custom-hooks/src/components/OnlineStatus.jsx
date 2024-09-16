import useIsOnline from "../hooks/useIsOnline";

export default function OnlineStatus(){
    const isOnline = useIsOnline(20);

    return <div>
        {isOnline?"Online":"Offline"}
    </div> 
}

