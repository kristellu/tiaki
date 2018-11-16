import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'; //para llamar el diseño css a este comp

export default class CustomNavbar extends Component{
    render(){
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    {/*<img alt="Logo Tiaki" class="visible-mobile" class="navbar-brand" id="logo-header-mobile" title="Logo Rappi Mustache" src="assets/icons/logotiaki.png"/>*/}
                
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
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={4} componentClass={Link} href="/about" to="/about">
                        ABOUT
                        </NavItem>
                        <NavItem eventKey={5} componentClass={Link} href="/login" to="/login">
                        LOG IN
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>      
            </Navbar>
        )
    }
}