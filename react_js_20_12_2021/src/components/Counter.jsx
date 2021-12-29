import { useEffect, useState } from "react";


const Counter = ({count})=>{
const [num, setNum] = useState("")

useEffect(()=>{
    setNum(count);
},[count])


    return(
        <div>
            <p>{num}</p>
            <button onClick={()=>setNum( num + 1 )}>click me</button>
        </div>
    )
}
export default Counter;