import axios from 'axios';
import { useEffect, useState } from 'react';


// custom hook for data fetching and auto-refreshing  
export default function useTodos(n, url){
    const [todos, setTodos] = useState([]);
    const [laoding, setLoading] = useState(true);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            axios.get(url).then(res=>{
                setTodos(res.data.todos);
                setLoading(false);
            });
        }, n*1000);

        axios.get(url).then(res=>{
            setTodos(res.data.todos);
            setLoading(false);
        });

        return ()=>{
            clearInterval(intervalId);
        }
    }, [n]);

    return {todos, laoding};
}
