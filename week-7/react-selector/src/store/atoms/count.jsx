import {atom, selector} from 'recoil'

// Atoms
export const countAtom = atom({
    key : "countAtom",
    default : 0
})

// Selector
export const evenSelector = selector({
    key : "evenSelector",
    get : ({get})=>{
        const count = get(countAtom);
        return count%2 == 0;
    }
})