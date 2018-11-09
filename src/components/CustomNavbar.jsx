import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'; //para llamar el diseño css a este comp

export default class CustomNavbar extends Component{
    render(){
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to ="/">TIAKI</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
                        About
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
                        News
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/login" to="/login">
                        Login
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>      
            </Navbar>
        )
    }
}