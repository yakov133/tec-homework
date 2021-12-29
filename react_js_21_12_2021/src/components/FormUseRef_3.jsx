import { useRef, useState } from "react";

const FormUseRef3 = () => {
  const [btn, setbBtn] = useState(true);

  const refName = useRef();
  const refEmail = useRef();
  const refPassword = useRef();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      refName.current.value &&
      refEmail.current.value &&
      refPassword.current.value
    ) {
      console.log(
        `Name: ${refName.current.value}, Email: ${refEmail.current.value}, password: ${refPassword.current.value}`
      );
    } else {
      console.log("One Field Or More Is Empty");
    }
  };

  const allInputsOk = () => {
      console.log(refName.current.value && refEmail.current.value && refPassword.current.value ? "ok":"not Ok");
    if (
      refName.current.value &&
      refEmail.current.value &&
      refPassword.current.value
    ){
        setbBtn(false);
    }
    else{
        setbBtn(true);
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="name">Name:</label>
      <br />
      <input
        ref={refName}
        onBlur={allInputsOk}
        type="text"
        id="name"
        placeholder="insert name"
      />
      <br />

      <label htmlFor="email">Email</label>
      <br />
      <input
        ref={refEmail}
        onBlur={allInputsOk}
        type="text"
        id="email"
        placeholder="insert email"
      />
      <br />

      <label htmlFor="password">Passord:</label>
      <br />
      <input
        ref={refPassword}
        onBlur={allInputsOk}
        type="password"
        id="password"
        placeholder="insert password"
      />
      <br />

      <input type="submit" disabled={btn} value="Submit" />
    </form>
  );
};
export default FormUseRef3;
