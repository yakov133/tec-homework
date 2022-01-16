import { useRef } from "react"

const FormUseRef2 = ()=>{
    const refName = useRef(null);
    const refEmail = useRef(null)
    const refPassword = useRef(null)

    const handelSubmit =(e)=>{
        e.preventDefault();
        if(refName.current.value && refEmail.current.value && refPassword.current.value){
            console.log(`Name: ${refName.current.value}, Email: ${refEmail.current.value}, password: ${refPassword.current.value}`);
        }else{
            console.log("One Field Or More Is Empty");
        }
    }
    return(
        <form onSubmit={handelSubmit}>
            <label htmlFor="name">Name:</label>
            <br />
            <input ref={refName} type="text" id="name" placeholder="insert name"/>
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <input ref={refEmail} type="text" id="email" placeholder="insert email"/>
            <br />

            <label htmlFor="password">Passord:</label>
            <br />
            <input ref={refPassword} type="password" id="password" placeholder="insert password"/>
            <br />
            
            <input type="submit" value="Submit" />
        </form>
    )
}
export default FormUseRef2;