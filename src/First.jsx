import { useEffect, useState } from "react";
import Second from "./Second";
import Third from "./Third";

const First = () =>{
    let [count, setCount] = useState(0);
    useEffect(() => {
        console.log('first compo, Use effect got called');
    }, [count]);

    const handleSubmit = ()=>{
        console.log('HandleSubmit got called');
        setCount(++count)
    }
    return(
        <>
        {console.log("First component rendering")}
        <h1>Counter : {count}</h1>
        <button onClick={handleSubmit}>+</button>
        <Second count={count}/>
        <Third />
        </>
    )
}

export default First;