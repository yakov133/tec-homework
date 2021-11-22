import React from "react"

class Counter extends React.Component{
    constructor(number){
        super(number);
        this.state= this.props.number ? {count:this.props.number}:{count:0}
    }


    render(){
        
        return<div style={{textAlign:"center", padding:"20px"}}>
            <button onClick={()=>{
                this.setState({count:this.state.count + 1});
                }
                }>click me!</button>
            <p>the number of Cliks: {this.state.count}</p>
        </div>
    }
}
export default Counter;