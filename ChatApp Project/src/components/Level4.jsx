import { useContext } from "react";
import { UserContex } from "./Context/UserContex";

const Level4 = ()=>{
    const user = useContext(UserContex)
    return(
        <div>
            <p>hello world</p>
            <p>Name: {user.name}</p> 
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </div>
    )
}
export default Level4;