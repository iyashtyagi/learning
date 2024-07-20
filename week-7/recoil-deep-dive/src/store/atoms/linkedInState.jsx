import {atom, selector} from 'recoil'

export const networkCountAtom = atom({
    key : "networkCount",
    default : 104
})

export const jobsCountAtom = atom({
    key : "jobsCount",
    default : 0
})

export const notificationCountAtom = atom({
    key : "notificationCount",
    default : 12
})

export const messagingCountAtom = atom({
    key : "messagingCount",
    default : 0 
})

export const allNotificationSelector = selector({
    key : "allNotificationSelector",
    get : ({get})=>{
        const networkAtomCount = get(networkCountAtom);
        const jobsAtomCount = get(jobsCountAtom);
        const notificationAtomCount = get(notificationCountAtom);
        const messagingAtomCount = get(messagingCountAtom);

        return (networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount);
    }
})