import Login from "./Login/Login";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PageNotFound from "./PageNotFound";
const ChatApp = () => {
  return (
    <BrowserRouter>
    <div >
      

        <Switch>
        <Route  component={Login} />  
          <Route exact path="/Login" component={Login}/>
          {/* <Route exact path="/Books" render={()=><Books changeBookDetails={this.changeBookDetails} books={this.state.books}/>} />
          <Route exact path="/BookDetails" render={()=><BookDetails book={this.bookToShow}/>} />
          <Route exact path="/AddBook" render={()=><AddBook addNewBook={this.addNewBook}/>} /> */}

          <Route  component={PageNotFound} />
          
        </Switch>

        
        
      </div>
      </BrowserRouter>
  );
};
export default ChatApp;
