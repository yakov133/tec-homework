import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Authenticated from "./Authenticated";
import PageNotFound from "./PageNotFound";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { useState,useEffect } from "react";
import { Redirect } from "react-router";

const Main = () => {
  const [logedIn, setlogedIn] = useState(false);
  const [Auth, setAuth] = useState("")
  useEffect(() => {
    const inLocalStorge = localStorage.getItem("auth");
    if(inLocalStorge){
      setlogedIn(JSON.parse(inLocalStorge))
    }
  }, [])
  let auth;
  let url;
  // let timer;
  const API_KEY = "AIzaSyBRd-yrtUDog1Lg86M3y-WZm3A5Ms8_0nw";

  const LoginAndRegister = () => {
    if (!logedIn) {
      console.log("signout");
      return (
        <>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
          <Redirect to="/" />
        </>
      );
    } else {
      console.log("signin");
      return (
        <>
          <Link to="/Authenticated">Authenticated</Link>
          <Redirect to="/Authenticated" />
        </>
      );
    }
  };

  const changAuth = (newAuth, option) => {
    auth = newAuth;
    option === "Register"
      ? (url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`)
      : (url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`);
    fetchReq();
  };

  const fetchReq = () => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(auth),
    })
      .then((response) => response.json())
      .then((data) => {
        if(!data.error){
        localStorage.setItem("auth",JSON.stringify(auth));
        console.log("Success:", data);
        setlogedIn(true);
        setAuth(data)
        }
        else{
          throw new Error( "something went worng")
        }
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const signOut = () => {
    setlogedIn(false);
    setAuth("")
    auth = "";
    url = "";
    localStorage.removeItem("auth");
  };
  const getAuth =()=>Auth
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        
        {LoginAndRegister()}
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            exact
            path="/Register"
            render={() => <Register changAuth={changAuth} />}
          />
          <Route
            exact
            path="/Login"
            render={() => <Login changAuth={changAuth} />}
          />

          <Route
            exact
            path="/Authenticated"
            render={() => <Authenticated signOut={signOut} getAuth={getAuth}/>}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      {logedIn ? <p>Connected</p> : <p>Discconected</p>}
    </BrowserRouter>
  );
};
export default Main;
