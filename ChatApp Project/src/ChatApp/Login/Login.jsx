import { useRef } from "react";
import style from "./login.module.css";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (  
      <form onSubmit={handelSubmit}>
      <div className={style.header}>
        <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-message-chat-flatart-icons-solid-flatarticons-5.png" alt="message"/>
        <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/000000/external-message-chat-flatart-icons-solid-flatarticons-6.png" alt="message"/>
        <section>Login To ChatApp</section>
      </div>
        <div className={style.tab}>
          <img
            onClick={() => {
              emailRef.current.focus();
            }}
            className={style.icon}
            src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-lineal-color-kiranshastry-5.png"
            alt="email img"
          />
          <input ref={emailRef} type="email" placeholder="Enter your Email" />
        </div>

        <div className={style.tab}>
          <img
            onClick={() => {
              passwordRef.current.focus();
            }}
            className={style.icon}
            src="https://img.icons8.com/fluency/48/000000/password--v2.png"
            alt="lock img"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Enter your Password"
          />
        </div>
        <input className={style.btnLogin} type="submit" value="Login" />
      </form>

  );
};
export default Login;
