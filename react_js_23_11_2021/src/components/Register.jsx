import React from "react";
import "./CSS/Register.css";

class Register extends React.Component {
  constructor() {
    super();
    this.state={fname:"",lname:"",email:"",password1:"",password2:"",checkd:false}
  }
  updateStates=(e,key)=>{
      if(key == "checkd"){
          if(this.state.checkd){
            this.setState({[key]:false})
          }else{
            this.setState({[key]:true})
          }
      }else 
      this.setState({[key]:e.target.value})
      
  }
  handleSubmit=(e)=>{
      e.preventDefault();
    if ( ! this.state.checkd){
        alert("please check the checkBox!")
    }
    else if(this.state.password1 != this.state.password2 ){
        alert("The passwords donst mach!!")
    }
    else{
        console.log({
            fname:this.state.fname,
            lname:this.state.lname,
            lname:this.state.email,
            lname:this.state.password1,
            checkbox:this.state.checkd
        });
    }
  }

  render() {
    return (
      <div className="bigDiv">
          <div className="sameLine"> <hr id="hr1"/> Register <hr id="hr2" /> </div>
            <p>Create your account. its free and only takes a minute.</p>
          <br />        
        <form onSubmit={this.handleSubmit}>
          
          <input style={{width:"24%", marginRight: "5.3%", height:"30px"}} onChange={(e)=>this.updateStates(e,"fname")} type="text" id="fname"  placeholder="First Name" required/>
          
          <input style={{width:"24%", height:"30px"}} onChange={(e)=>this.updateStates(e,"lname")} type="text" id="lname"  placeholder="Lirst Name" required/>
          <br />
          <br />
          <input style={{width:"54%", height:"30px"}} onChange={(e)=>this.updateStates(e,"email")} type="email" id="email"  placeholder="Emial"  required/>
          <br />
          <br />
          <input style={{width:"54%", height:"30px"}} onChange={(e)=>this.updateStates(e,"password1")} type="password" id="password1"  placeholder="Password"  required/>
          <br />
          <br />
          <input style={{width:"54%", height:"30px"}} onChange={(e)=>this.updateStates(e,"password2")} type="password" id="password2"  placeholder="Confirm Password"  required/>
          <br />    
          <br />    
          <input type="checkbox"  onChange={(e)=>this.updateStates(e,"checkd")}   />
          <label for="checkbox">I accept the <span className="greenColor">Terms Of Use</span> and <span className="greenColor">Privacy Policy</span></label>
          <br />
          <br />
          <input style={{width:"54%", height:"30px",backgroundColor:"green",color:"white"}} type="submit" id="btn"  value="Submit" />
        </form>
      </div>
    );
  }
}
export default Register;
