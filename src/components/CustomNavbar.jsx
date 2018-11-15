import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'; //para llamar el diseño css a este comp

export default class CustomNavbar extends Component{
    render(){
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <a class="navbar-brand" href="/">TIAKI</a>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullLeft>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/" to="/">
                        HOME
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/markets" to="/markets">
                        OFFERS
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="#" to="#">
                        ORDERS
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        
                        <NavItem eventKey={5} componentClass={Link} href="#" to="#">
                        X
                        </NavItem>
                        <NavItem eventKey={6} componentClass={Link} href="/about" to="/about">
                        ABOUT
                        </NavItem>
                        <NavItem eventKey={7} componentClass={Link} href="/login" to="/login">
                        LOG IN
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>      
            </Navbar>
           
           /* <nav className="navbar navbar-toggleable-md navbar-light bg-light">
                <button className="navbar-toggler navbar-toggler-right" type="button" 
                data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a className= "navbar-brand" href="#">Navbar</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">    
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Link</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#"> Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Link</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Home </a>
                        </li>
                            
                        <li className="nav-item">
                            <a className="nav-link" href="#"> Home </a>
                        </li>

                       <li className="nav-item">
                            <a className="nav-link" href="#"> Home </a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>*/
        )
    }
}