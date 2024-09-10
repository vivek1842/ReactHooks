import { useEffect } from "react";
const Third = () => {
    useEffect(() => {
        console.log("Third compo, Use Effect called");
    },[])
    return(
        <>
            {console.log("Third compo is rendering")}
            <h1>Third</h1>
        </>
    )
}

export default Third;