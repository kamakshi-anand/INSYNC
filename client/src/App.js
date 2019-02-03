import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Exercise from './components/Exercise/index';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/exercise" component={Exercise} />
          {/*  <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} /> */}
      </div>
      </Router>

    );
  }
}

export default App;
