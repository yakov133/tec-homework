import { useState } from "react";

const ChangePassword = ({ getAuth }) => {
  const [newPassword, setnewPassword] = useState("");
  const API_KEY = "AIzaSyBRd-yrtUDog1Lg86M3y-WZm3A5Ms8_0nw";
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`;
  const update = (e) => {
    e.preventDefault();
    const userToken = getAuth().idToken;
    //   console.log(userToken);
    //   console.log(url);
    //   console.log(newPassword);
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify({ idToken: userToken, password: newPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        if(!data.error){
            console.log("Success:", data);  
            }
            else{
              throw new Error( )
            }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <form onSubmit={update}>
        <label htmlFor="password">New Passwod</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setnewPassword(e.target.value)}
          autoComplete="on"
        />
        <button type="submit">UpDate</button>
      </form>
    </div>
  );
};
export default ChangePassword;
