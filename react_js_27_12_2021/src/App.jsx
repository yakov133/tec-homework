// import { useEffect } from "react";
import { useEffect } from "react";
import "./App.css";
import Spinner from "./components/Spinner";
import PerformanceProblem from "./components/targil3";
import { useFetch } from "./hook/useFetch";

function App() {
 
  // const [data, isLoading, error] = useFetch("https://www.reddit.com/r/reactjs.json");
  
  // useEffect(()=>{
  //   console.log("data update");
  // },[data]);
  
  // useEffect(()=>{
  //   console.log("isLoding update");
  // },[isLoading]);

  // useEffect(()=>{
  //   console.log("error update");
  // },[error]);

  return <div className="App">
    {/* <h1>hello world</h1>
    
    {isLoading ? <Spinner /> : ""}
    {data ? data.map((item) => <p key={item.data.id}> {item.data.title} </p>) : ""}
    {error?<p style={{color:"red"}}>{error}</p>:""} */}

    {/* <PerformanceProblem/> */}
    
  </div>;
}

export default App;
