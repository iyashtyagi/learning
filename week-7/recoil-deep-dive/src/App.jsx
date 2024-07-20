import  {RecoilRoot, useRecoilValue} from 'recoil'
import { allNotificationSelector, jobsCountAtom, messagingCountAtom, networkCountAtom, notificationCountAtom } from './store/atoms/linkedInState';

export default function App(){

    return(<>
        <RecoilRoot>
            <Buttons />
        </RecoilRoot>

    </>)
}

function Buttons(){

    const networkCount = useRecoilValue(networkCountAtom);
    const jobsCount = useRecoilValue(jobsCountAtom);
    const messagingCount = useRecoilValue(messagingCountAtom);
    const notificationCount = useRecoilValue(notificationCountAtom);
    const totalNotificationCount = useRecoilValue(allNotificationSelector)

    return(
        <div>
            <button> Home </button>
            <button> My network ({networkCount > 99? "99+":networkCount}) </button>
            <button> Jobs ({jobsCount}) </button>
            <button> Messaging ({messagingCount}) </button>
            <button> Notification ({notificationCount}) </button>
            <button> Me ({totalNotificationCount}) </button>
        </div>
    )
}
