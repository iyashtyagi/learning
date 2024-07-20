import {atom, selector} from "recoil"
import axios from "axios"

export const notificationsAtom = atom({
    key : "notificationsAtom",
    default : selector({
        key : "notificationsAtomSelector",
        get : async()=>{
            const res = (await axios.get("https://sum-server.100xdevs.com/notifications")).data;
            return res;
        }
    })
})

export const allNotificationsSelector = selector({
    key : "allNotificationsSelector",
    get : ({get}) =>{ 
        const allNotications = get(notificationsAtom);
        return (allNotications.network + allNotications.jobs + allNotications.messaging + allNotications.notifications);
    }
})