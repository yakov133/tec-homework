import { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";

import PageNotFound from "./pages/PageNotFound";
import AddBook from "./pages/AddBook";


class App extends Component {
  state = {
    books: [
      {
        author: "Rick Riordan",
        bookName: "The Lightning Thief",
        pagesNum: 350,
        imgSrc: "https://upload.wikimedia.org/wikipedia/he/thumb/5/56/%D7%A4%D7%A8%D7%A1%D7%99_%D7%92%27%D7%A7%D7%A1%D7%95%D7%9F_%D7%95%D7%94%D7%90%D7%9C%D7%95%D7%9E%D7%A4%D7%99%D7%99%D7%9D.jpg/200px-%D7%A4%D7%A8%D7%A1%D7%99_%D7%92%27%D7%A7%D7%A1%D7%95%D7%9F_%D7%95%D7%94%D7%90%D7%9C%D7%95%D7%9E%D7%A4%D7%99%D7%99%D7%9D.jpg",
        info: "The Lightning Thief is the first book in the series and was released on July 1, 2005."
      },
      {
        author: "Rick Riordan",
        bookName: "The Last Olympian",
        pagesNum: 423,
        imgSrc: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQBvuYInBqxAIGEt5L0Jm7WP-zV8hYAKdGaytDcwLYmGLiCDMQNqH8uJUnE2wD0rTHOlq41kiKtrDP5vZNAYziwnffQeUlv0iA9EnmvonXzBVsSP5kH3RzF&usqp=CAE",
        info: "The Last Olympian, the fifth and final book in the Percy Jackson series, was released on May 5, 2009."
      }, 
      {
        author: "Rick Riordan",
        bookName: "The Titan's Curse",
        pagesNum: 603,
        imgSrc: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSuzfdXVVM5TGL4h_9nwy93L9NpgYbpKJXp1B7tNN3HQo-RKVHf_JCO8EF7MeiDdRfOf97p7wIL4PTAMCQN-cgvSiNM7Zl_u61ZRUhkynQ&usqp=CAE",
        info: "The Titan's Curse is the third installment in the series. It was released on May 11, 2007."
      },  
    ],
  };

  bookToShow="";
  changeBookDetails =(index)=>{
    this.bookToShow = this.state.books[index];
  }

  addNewBook=(obj)=>{
    let tempArray = [...this.state.books]
    tempArray.push(obj)
    this.setState({books:tempArray});
  }
  

  render() {
    return (
<BrowserRouter>
    <div className="App">
      
        <div>    
            <div className="mini_list">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/Books">Books</Link>
            </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Books" render={()=><Books changeBookDetails={this.changeBookDetails} books={this.state.books}/>} />
          <Route exact path="/BookDetails" render={()=><BookDetails book={this.bookToShow}/>} />
          <Route exact path="/AddBook" render={()=><AddBook addNewBook={this.addNewBook}/>} />

          <Route  component={PageNotFound} />
          
        </Switch>

        
        
      </div>
    </BrowserRouter>    );
  }
}

export default App;
