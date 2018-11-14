import React, { Component } from 'react';
import {  Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <div className="panel">
                <h2>Welcome to Tiaki</h2>
                <p>Please enter your email and password</p>
            </div>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              
            />
           <div className="form-group text-center">
              <input type="checkbox" tabIndex={3} className name="remember" id="remember" />
              <label htmlFor="remember"> Remember Me</label>
            </div>
          </FormGroup>
         
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          ><a href="#ADMIN">
            Login
            </a>
          </Button>
          <div className="text-center">
              <a href="#" tabIndex={1} className="forgot-password">Forgot Password?</a>
          </div>
          <div className="text-center">
              <a href="/signup" tabIndex={2} className="register">Register</a>
          </div>
        </form>
      </div>
     
    );
  }
}