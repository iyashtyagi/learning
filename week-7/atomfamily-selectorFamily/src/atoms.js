import { atomFamily } from 'recoil'
import { TODOS } from './todos';

export const todoAtomsFamily = atomFamily({
    key : "todoAtomsFamily",
    default : id => {
        let foundTodo = null;
        for (let i = 0; i < TODOS.length; i++) {
            if (TODOS[i].id === id) {
                foundTodo = TODOS[i];   
            }
        }
        return foundTodo;
    }
})