import React, { Component } from "react";
import { Redirect } from "react-router";
import * as style from "./CSS/addbook.module.css"

export default class AddBook extends Component {
  state = { author: "", bookName: "", pagesNum: "", imgSrc: "", info: "" ,disabledBtn:true ,redirct:false};

  handelSubmit = (e) => {
    e.preventDefault();
    let obj = {
        author:this.state.author,
        bookName:this.state.bookName,
        pagesNum:this.state.imgSrc,
        info:this.state.info
    }
    this.props.addNewBook(obj);
    this.setState({redirct:true})


  };
  validationOfTextempty = (e,key)=>{
    if(e.target.value !== " " && e.target.value !== "" && e.target.value[0]!==" "){
        this.setState({[key]:e.target.value})
    }
    this.changBtn();
  }

  validationOfNegetiveInputs=(e,key)=>{
    if(e.target.value !== " " && e.target.value !== "" ){
        if(e.target.value >= 1){
        this.setState({[key]:e.target.value})
    }
            
    }
    this.changBtn();
  }
changBtn=()=>{
    if(this.state.author && this.state.bookName  && this.state.imgSrc && this.state.pagesNum && this.state.info)
        {
            this.setState({disabledBtn:false})
        }
    else{
        this.setState({disabledBtn:true})
    }
}


  render() {
      if(this.state.redirct){
          return <Redirect to="/books" />

      }
    return (
      <div >
        <form className={style.formStyle} onSubmit={this.handelSubmit}>
          
          <div>
            <label htmlFor="author">Author: </label>
            <br />
            <input onChange={(e)=>this.validationOfTextempty(e,"author")} type="text" id="author"/>
          </div>

          <br />
          <div>
            <label htmlFor="bookName">Book Name:</label>
            <br />
            <input onChange={(e)=>this.validationOfTextempty(e,"bookName")} type="text" id="bookName"/>
          </div>

          <br />
          <div>
            <label htmlFor="pagesNum">Pages Number:</label>
            <br />
            <input onChange={(e)=>this.validationOfNegetiveInputs(e,"pagesNum")} min={0} type="number" id="pagesNum"/>
          </div>

          <br />
          <div>
            <label htmlFor="imgSrc">Image Source:</label>
            <br />
            <input onChange={(e)=>this.validationOfTextempty(e,"imgSrc")} type="text" id="imgSrc"/>
          </div>
          
          <br />
          <div>
            <label htmlFor="info">Summery: </label>
            <br />
            <textarea onChange={(e)=>this.validationOfTextempty(e,"info")} type="text" id="info" cols="30" rows="10"></textarea>
          </div>

        <input type="submit" disabled={this.state.disabledBtn } value="Add Book"  />
        </form>
      </div>
    );
  }
}
