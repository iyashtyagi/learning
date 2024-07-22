import {atom} from "recoil"

export const styleAtom = atom({
    key : "styleAtom",
    default : {"display": "flex", "justifyContent" : "center", "minHeight": "100vh", "background" : "default"}
})