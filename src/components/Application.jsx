import { useEffect, useState } from "react"
import axios from "axios";
export const  Application = () => {
    const [userId,setUserId] = useState(1);
    const [items,setItems] = useState([]);
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => setItems(response.data)) 
    },[userId]);
    return (
        <div>
            <input onChange={(e)=> setUserId(Number(e.target.value))}/>
            <pre>{JSON.stringify(items,null,2)}</pre>
        </div>
    )
}