import {RecoilRoot, useRecoilValue} from 'recoil'
import { notificationsAtom, allNotificationsSelector } from "./store/atoms/linkedIn.jsx";

export default function App(){

    return(<>
        <RecoilRoot>
            <Buttons />
        </RecoilRoot>
    </>)
}

function Buttons(){

    const allNotifications = useRecoilValue(notificationsAtom);

    const totalNotificationCount = useRecoilValue(allNotificationsSelector);

    return(
        <div>
            <button> Home </button>
            <button> My network ({allNotifications.network > 99? "99+":allNotifications.network}) </button>
            <button> Jobs ({allNotifications.jobs}) </button>
            <button> Messaging ({allNotifications.messaging}) </button>
            <button> Notification ({allNotifications.notifications}) </button>
            <button> Me ({totalNotificationCount}) </button>
        </div>
    )
}
