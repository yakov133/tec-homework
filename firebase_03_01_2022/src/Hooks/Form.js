import { useState } from "react";
import { Redirect } from "react-router";

const Form = ( changAuth , compName) => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    changAuth({ email, password },compName);
    return <Redirect to="/Authenticated" />

  };
  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="email">Email</label>
      <br />
      <input
        id="email"
        type="email"
        onChange={(e) => setemail(e.target.value)}
        autoComplete="on"
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        id="password"
        type="password"
        onChange={(e) => setpassword(e.target.value)}
        autoComplete="on"
      />
      <br />
      {compName === "Login" ? (
        <button type="submit">Login</button>
      ) : (
        <button type="submit">Register</button>
      )}
    </form>
  );
};
export default Form;
