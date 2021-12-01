import React, { Component } from "react";
import PostTable from "./PostTable";
import * as style from "./style.module.css";

export default class PostJsonPlaceHolder extends Component {
  state = {
    data: [],
    inputTitle: "",
    inputBody: "",
    showForm: false,
    index: "",
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }))
      .catch((err) => console.log(err));
  };

  edit = (index) => {
    console.log("edit", index);
  };
  delete = (index) => {
    let tempArr = [...this.state.data];
    tempArr.splice(index,1);
    this.setState({ data: tempArr });
  };
  changShow = (i) => {

    this.setState({
      showForm: true,
      index: i,
      inputTitle: this.state.data[i].title,
      inputBody: this.state.data[i].body,
    });
  };
  update = () => {
    if ((this.state.index && this.state.inputTitle && this.state.inputBody) || this.state.index === 0) {
      let tempArr = [...this.state.data];
      tempArr[this.state.index].title = this.state.inputTitle;
      tempArr[this.state.index].body = this.state.inputBody;
      this.setState({ data: tempArr });
    }
    this.setState({ index:"",inputTitle:"",inputBody:"",showForm:false});
  };
  render() {
    return (
      <div >
        {this.state.showForm && (
          <div style={{textAlign:"center" }}>
            <input type="text" onChange={(e) => this.setState({ inputTitle: e.target.value })} value={this.state.inputTitle}/>
            <br />
            <br />
            <input type="text" onChange={(e) => this.setState({ inputBody: e.target.value })} value={this.state.inputBody} />
            <br />
            <button onClick={this.update}>Update</button>
            <br />
            <br />
          </div>
        )}
        <table>
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
              <th>Remove</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, i) => {
              return <PostTable post={item} i={i} edit={this.changShow} delete={this.delete}/>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
