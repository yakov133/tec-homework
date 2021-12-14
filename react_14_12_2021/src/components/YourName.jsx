import { useState } from "react";

const YourName = ()=>{
    const [colorName, setColor] = useState("red");

    return(<p style={{color:colorName}} onClick={() => setColor(colorName === "red" ? "green" : "red")}>
        yakov kassa
        </p>)
}
export default YourName;