import { atom, selector } from "recoil";
import axios from "axios";

export const usernameAtom = atom({
    key: "usernameAtom",
    default: null
});

export const userSelectorAtom = selector({
    key: "userSelectorAtom",
    get: async ({ get }) => {
        console.log("here");
        const username = get(usernameAtom);
        if (!username) {
            return null;
        }
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response.data);
            return {success: true ,data:response.data};
        } catch (error) {
            console.error("Error fetching user data:", error);
            return {success : false};
        }
    }
});
