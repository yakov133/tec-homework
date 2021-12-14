import { useState } from "react";

const Name = ({name})=>{
const [color,setColor] = useState("red");

return(
    <p style={{color:color}} onClick={()=>setColor(color === "red" ? "green" : "red" )}> {name}</p>
)
}
export default Name;