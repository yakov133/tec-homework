import Form from "../Hooks/Form";

const Register = ({changAuth})=>{
    document.title="Register Page";
    return(
        <div>
            <h1>Welcome To Register Page</h1>
            {Form(changAuth,"Register")}
        </div>
    )
}
export default Register;