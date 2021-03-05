import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';

import Header from './components/Header';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';

import ContentHome from './components/ContentHome';
import ContentBees from './components/ContentBees';
import ContentLadybug from './components/ContentLadybug';




function App() {
  return (
    // when we use react router, we need to place everything inside a HashRouter tag
    <HashRouter>
        <div className="App">
            <Header />
            {/* <Footer /> */}
            <Navbar />

            {/* purely to set up routes and associated content */}
            <div className="content-section" >
              {/* Set up relationships between the route and the content rendered when that route is active */}
              <Route exact path="/"component={ContentHome} />  {/* // only when the path is the home directory and home directory ONLY, use this EXACT path */}
             
              <Route path="/bees"component={ContentBees} />

              <Route path="/ladybugs"component={ContentLadybug} />

            </div>


        </div>
    </HashRouter>
  );
}
export default App;

