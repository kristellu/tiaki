import React, { Component } from 'react';
//import logo from './logo.svg'; //LOGO TIAKI
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/news" component={News}/>
        </div>
      </Router>
    );
  }
}

export default App;
