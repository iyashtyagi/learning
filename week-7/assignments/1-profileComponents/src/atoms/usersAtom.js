import {atom, selector} from 'recoil'
import axios from 'axios'

export const avatarAtom = atom({
    key : "avatarAtom",
    default : selector({
        key : "avatarAtomSelector", 
        get : () => {
            const imgPath ="../src/assets/avatars/image.png";
            return imgPath;
        }
    })
})

export const personalInfoAtom = atom({
    key : "profileInfoAtom",
    default : {
        name : "Rita Correia",
        age : 32,
        location : "London"
    }
})


export const statsAtom = atom({
    key : "statsAtom",
    default : {
        followersCount : 80000,
        likesCount : 803000,
        photosCount : 1400
    }
})