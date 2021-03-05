import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; //name of package
/* making sure the file App.js is getting the info from
the correct file; they are correctly linked */
import About from './about.js'; 
import Home from './home.js';
import Gallery from './gallery.js';
import Welcome from './welcome.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>
            {/* 'Router' is a component */}
            <Router>
              <div>
                {/* generating on the browser */}
                <nav>
                  <ul>
                    <li>
                      {/* link to="/info" is a slug. as in  UltaBeauty.com/coupon*/}
                      <Link to="/"> Home</Link> 
                    </li>

                    <li>
                      <Link to="/about"> About</Link>
                    </li>

                    <li>
                      <Link to="/gallery"> Gallery </Link>
                    </li>

                    <li>
                      <Link to="/welcome"> Welcome </Link>
                    </li>
                  </ul>

                  <Switch>
                    {/* // starting opposite of each other/ in reverse // */}
                    <Router> 
                    <Route path="/welcome">
                        <Welcome
                        name = "Vanesa"
                        age = "22"
                        color = "brown" />
                    </Route>

                      <Route path="/gallery">
                        <Gallery />
                      </Route>

                      <Route path="/about"> 
                        <About /> 
                      </Route>
											{/* // do not consider it part of something, this is the exact path // */}
                      <Route exact path="/"> 
                        <Home /> 
                      </Route>

                    </Router>
                  </Switch>

                </nav>
                {/* generated on the browser */}
              </div>
            </Router>
          </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
