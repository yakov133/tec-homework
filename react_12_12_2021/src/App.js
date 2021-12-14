import { BrowserRouter, Switch, Route,Link } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact"
import Courses from "./pages/Courses"
import Mentoring from "./pages/Mentoring"
import Testimonials from "./pages/Testimonials"
import Events from "./pages/Events"
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
    <div className="navbar">
            <div className="editorName">
                <span> <span className="red">yakov</span> <span className="lastName">kassa</span></span>
            </div>
            <div className="mini_list">
                <Link className="links" to="/">Home</Link>
                <Link className="links" to="/About">About</Link>
                <Link className="links" to="/Contact">Contact</Link>
                <Link className="links" to="/Courses">Courses</Link>
                <Link className="links" to="/Mentoring">Mentoring</Link>
                <Link className="links" to="/Testimonials">Testimonials</Link>
                <Link className="links" to="/Events">Events</Link>
            </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Courses" component={Courses} />
          <Route exact path="/Mentoring" component={Mentoring} />
          <Route exact path="/Testimonials" component={Testimonials} />
          <Route exact path="/Events" component={Events} />
          <Route  component={PageNotFound} />
        </Switch>

        <div className="footer">
            <div className="a-herf">
              <a href="https://github.com/yakov133"><img src="https://img.icons8.com/stickers/100/000000/github.png" alt=""/></a>
              <a href="https://www.linkedin.com/in/yakov-kassa-406636116/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt=""/></a>
              <a href="https://www.youtube.com/"><img src="https://img.icons8.com/fluency/48/000000/youtube-play.png" alt=""/></a>
              <a href="https://www.udemy.com/home/my-courses/learning/"><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-udemycom-is-an-online-learning-and-teaching-platform-logo-color-tal-revivo.png" alt=""/></a>
            </div>
            <span className="sourc"> © 2021 YAKOV KASSA. ALL RIGHTS RESERVED.</span>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
