import { useState } from "react"

export const  Application = () => {
    const [value, setValue] = useState(0);
    const [name,setName] = useState("");
    const[hidden,setHidden] = useState(true);
    const add = () => setValue((prev)=> prev + 1);
    const rem = () => setValue((prev)=> prev - 1);
    const toggle =() => setHidden((prev)=>!prev);

    return (
        <div>
            Value: {value}
            Name: {name}
            <button onClick={add}>Add</button>
            <button onClick={rem}>Rem</button>
            <input onChange={(e)=> setName(e.target.value)}/>
            <div>
                <button onClick={toggle}>Tutu</button>
                {!hidden && <div>Ватрушка</div>}
            </div>
        </div>
    )
}