import React, { Component,useContext, useReducer } from 'react';
//import logo from './logo.svg'; //LOGO TIAKI
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Login from './components/Login';
import Markets from './components/Markets';
import Signup from "./components/Signup";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/news" component={News}/>
          <Route path="/Login" component={Login}/>
          <Route path="/markets" component={Markets}/>
          <Route path="/signup" component={Signup}/>
           </div>
      </Router>
      
    );
  }
}

export default App;
