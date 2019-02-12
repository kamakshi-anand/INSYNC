import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Exercise from './components/Exercise/index';
import Leisure from './components/Leisure/index';
import Chat from './components/Chat/chat';
import Goodnight from './components/Goodnight/Goodnight';
import Login from './components/Login/LoginPage.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/exercise" component={Exercise} />
          <Route exact path="/leisure" component={Leisure} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/goodnight" component={Goodnight} />
          <Route exact path="/login"  component={Login} />



          {/*  <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} /> */}
      </div>
      </Router>

    );
  }
}

export default App;
