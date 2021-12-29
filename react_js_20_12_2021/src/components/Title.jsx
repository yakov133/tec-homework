import moment  from "moment";
import { useEffect } from "react";

const ChangeTitle = ()=>{
    
    const getTime=()=>{
        const now = moment();
        document.title = now.format('MMMM Do YYYY, h:mm:ss a');
    }

    useEffect(()=>{
        const holder = setInterval(()=>{
            getTime();
        },1000)

        return ()=>{
            console.log("setInterval was stoped");
            clearInterval(holder);
    }
    },[])
    return (
        <div>

        </div>
    )
}

export default ChangeTitle;