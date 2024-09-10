import { useEffect } from "react";
import React from "react";

const Second = (props) =>{
    const {count} = props
    useEffect(() => {
        console.log("Second compo, Use Effect called");
    },[])
    return(
        <>
            {console.log("Second compo is rendering")}
            <h1>Second: {count}</h1>
        </>
    )
}
export default React.memo(Second);