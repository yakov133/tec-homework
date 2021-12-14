import React, { Component } from "react";
import * as style from "./CSS/books.module.css"
import { Redirect } from "react-router";

export default class Books extends Component {
    state={redirectToBookDetails:false,redirectToAddBook:false}

  handelClick = (index) => {
    this.props.changeBookDetails(index)
    this.setState({redirectToBookDetails:true})
  };

  render() {
      if(this.state.redirectToBookDetails){
          return <Redirect to="/BookDetails" />
      }
      if(this.state.redirectToAddBook){
        return <Redirect to="/AddBook" />
    }
    return (
      <div>
        <button className={style.btnAddBook} onClick={()=>this.setState({redirectToAddBook:true})}>Add New Book</button>
        <div className={style.styleTable}>
          <table>
            <thead>
              <tr>
                <th>Book Name:</th>
                <th>Author:</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {this.props.books.map((book, index) => (
                <tr key={index}>
                  <td>{book.bookName}</td>
                  <td>{book.author}</td>
                  <td className={style.buttonStyle}>
                    <button onClick={() => this.handelClick(index)}>
                      details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
