import React from "react";
import "./CSS/Wheather.css";

class Wheather extends React.Component {
  constructor() {
    super();
    this.state = { result: "", city: "" };
  }
  updateCity = (e) => {
     this.setState({ city: e.target.value });
    
  };

  fetchData = ()=>{
      let tempResult ;
    
      const API_key = "d6abf8802df77ac560227b518149b6d5"
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=d6abf8802df77ac560227b518149b6d5`
    fetch(URL,{ method:"GET" })
      .then(response => response.json())
      .then(result => {  
        //   console.log('Success:', result);

        tempResult =(<div style={{textAlign:"center" ,border:"1px solid green",margin:"3%" , marginLeft:"12%",width:"50%",backgroundColor:"#bdf5bd",color:"green"}}>
            <p>description : {result.weather[0].description}</p>
            <p>temp.max = {parseInt(result.main.temp_max - 273.15)}</p>
            <p>temp.min = {parseInt(result.main.temp_min - 273.15)}</p>
        </div>)

        this.setState({result:tempResult})
      })
      .catch(error => {
        tempResult =(
            <div style={{textAlign:"center" ,border:"1px solid red",margin:"3%" , marginLeft:"12%",width:"50%",backgroundColor:"#fad1d1",color:"red"}}>
                <p>The city could not be found.</p>
            </div>
        )
        this.setState({result:tempResult})
        // console.error('Error:', error);
      });     

      
  }

  render() {
    return (
      <div className="mainDiv">
        <h1>What's The Weathe?</h1>
        <h3>Enter the name of a city.</h3>
        <input onChange={this.updateCity} id="textInfo" type="text" />
        <br />
        <br />
        <br />
        <br />
        <input id="btn" type="button" onClick={this.fetchData} value="Submit" />
        {this.state.result}
      </div>
    );
  }
}
export default Wheather;
