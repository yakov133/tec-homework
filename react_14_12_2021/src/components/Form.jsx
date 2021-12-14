import { useState } from "react";

const Form = ()=>{
    const [userObj, setuserObj] = useState({name:"",email:"",password:""})

    const handelSubmit = (e)=>{
        e.preventDefault();
        console.log(userObj);
    }
    return(
        <form onSubmit={handelSubmit}>
            <label htmlFor="name">Name:</label>
            <br />  
            <input type="text" name="name" id="name" onChange={
                (e)=>setuserObj({name:e.target.value,email:userObj.email,password:userObj.password})
            }/>
            <br />
            <label htmlFor="eamil">Email:</label>
            <br />  
            <input type="email" name="email" id="eamil" onChange={
                (e)=>setuserObj({email:e.target.value,name:userObj.name,password:userObj.password})
            }/>
            <br />
            <label htmlFor="password">Password:</label>
            <br />  
            <input type="password" name="password" id="password" onChange={
                (e)=>setuserObj({password:e.target.value,name:userObj.name,email:userObj.email  })
            }/>
            <br />
            <button type="submit" disabled={!userObj.name || !userObj.password || !userObj.email ?true:false}>Login</button>
        </form>
    )
}
export default Form;