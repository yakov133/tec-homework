import Level2 from "./Level2";
import { UserContex } from "./Context/UserContex";


const Level1 = ()=>{
    const user = {
        name:"yakov kassa",
        email:"yakov@gmail.com",
        password:"123456"
    }

return(
    <UserContex.Provider value={user}>
    <Level2/>
    </UserContex.Provider>
)
}
export default Level1;