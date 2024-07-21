import { atomFamily, selectorFamily } from 'recoil'
import axios from 'axios'


// selectorFamily
export const todoAtomsFamily = atomFamily({
    key : "todoAtomsFamily",
    default: selectorFamily({
        key : "todoSelectorFamily",
        get : (id) => async({get}) => {
            let todo = (await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)).data.todo;
            return todo;
        }
    })
})