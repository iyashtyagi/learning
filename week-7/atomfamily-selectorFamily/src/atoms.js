import { atomFamily, selectorFamily } from 'recoil'
import { TODOS } from './todos';
import axios from 'axios'

// atomFamily
// export const todoAtomsFamily = atomFamily({
//     key : "todoAtomsFamily",
//     default : id => {
//         let foundTodo = null;
//         for (let i = 0; i < TODOS.length; i++) {
//             if (TODOS[i].id === id) {
//                 foundTodo = TODOS[i];   
//             }
//         }
//         return foundTodo;
//     }
// })

// selectorFamily
export const todoAtomsFamily = atomFamily({
    key : "todoAtomsFamily",
    default: selectorFamily({
        key : "todoSelectorFamily",
        get : (id) => async({get}) => {
            let todo = (await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)).data;
            return todo;
        }
    })
})