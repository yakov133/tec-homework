import React from "react";

class TwoCounter extends React.Component{
    constructor(){
        super()
        this.state={count1:0,count2:0}
    }

    render(){
        return<div style={{textAlign:"center", padding:"20px"}}>
            <button onClick={ ()=>{ this.setState({ count1 : this.state.count1 + 1 }) } }>btn1</button>
            <button onClick={ ()=>{ this.setState({ count2 : this.state.count2 + 1 }) } }>btn2</button>
            <br />
            <p>first button cliks: {this.state.count1}</p>
            <p>second button cliks: {this.state.count2}</p>
        </div>
    }
}
export default TwoCounter;