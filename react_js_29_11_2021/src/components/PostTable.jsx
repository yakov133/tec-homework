import React, { Component } from "react";
import * as style from "./style.module.css"


export default class PostTable extends Component {
    state = { flip:1 }

    changBackGround=()=>{
        if(this.flip){
            this.setState({flip:0})
            return style.A;
        }
        else{
            this.setState({flip:1})
            return style.B;
        }
    }
  render() {
    
    return (
      <tr  >
        <td >{this.props.post.userId}</td>
        <td >{this.props.post.id}</td>
        <td >{this.props.post.title}</td>
        <td >{this.props.post.body}</td>
        <td ><button onClick={()=>{this.props.delete(this.props.i)}}><img style={{width:"20%",height:"20%"}} src="https://media.istockphoto.com/photos/open-garbage-basket-on-white-background-isolated-3d-illustration-picture-id1302788699?b=1&k=20&m=1302788699&s=170667a&w=0&h=mm_TI63xy9Fns_ukU_rwdB-rGARrWGApx0ns0AUnbKk=" alt="deleting icone" /></button></td>
        <td ><button onClick={()=>this.props.edit(this.props.i)}><img style={{width:"20%",height:"20%"}} src="https://cdn.pixabay.com/photo/2017/06/21/07/51/icon-2426370__480.png" alt="edit icone" /></button></td>
      </tr>
    );
  }
}
