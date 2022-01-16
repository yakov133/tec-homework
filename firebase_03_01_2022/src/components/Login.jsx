import Form from "../Hooks/Form";

const Login =({changAuth})=>{
    document.title="Login Page";
    return(
        <div>    
            <h1>Welcome To Login Page</h1>
            {Form(changAuth,"Login")}
        </div>
    )
}
export default Login;