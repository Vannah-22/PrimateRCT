import React, {useState} from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';

import Header from './components/Header';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';

import ContentHome from './components/ContentHome';
import ContentBees from './components/ContentBees';
import ContentLadybug from './components/ContentLadybug';




function App() {
  // // this sytax uses a hook. 
  // // const declares variable
  // //count is the name of the variable in state
  // // setCount:  the method used that variable
  // // useState(0); 0 is the default value (YOU NEED THIS, OR ELSE USESTATE IS NOT DEFINED) import React, {useState} from 'react';) 
        //we only use it once to declare it, so you can change the value of it later in the code
        // traditionally, varName, setvarName, so consistency matters; be as descriptive as possible.
  const [count, setCount] = useState(0);

  const [color,setColor] = useState("");



  return (
    // when we use react router, we need to place everything inside a HashRouter tag
    <HashRouter>
        <div className="App">
            <Header />
            {/* <Footer /> */}

            <Navbar
              color={color} 
              setColor={setColor}
              />

            {/* purely to set up routes and associated content */}
            <div className="content-section" >
              {/* Set up relationships between the route and the content rendered when that route is active */}
              <Route exact path="/"component={ContentHome} />  {/* // only when the path is the home directory and home directory ONLY, use this EXACT path */}
             
              <Route path="/bees"component={ContentBees} />

              <Route path="/ladybugs"component={ContentLadybug} />

            </div>
              <p> You clicked {count} times </p>
              <button onClick={
                function () {
                  setCount(count + 1);
                }
              }> 
              Click me to increase the count 
              </button>

            </div>
    </HashRouter>
  );
}
export default App;

