import ChangePassword from "./ChangePassword";

const Authenticated =({signOut,getAuth})=>{
    document.title = "Authenticated Page";
    return(
        <div>
            <h1>Welcome To Authenticated Page</h1>
            <button onClick={()=>signOut()}>Sing Out</button>
            <ChangePassword getAuth={getAuth}/>
        </div>
    )
}
export default Authenticated;