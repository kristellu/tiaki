import React,   {Component} from 'react'
import{ Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component{
    render(){
        return(
            <Grid>
                <Jumbotron>
                   <h2>COMPRAR BARATO ES SIMPLE</h2>
                   <p>This is our page, React-Router & Reat-bootstrap</p>
                    <Link to= "/about">
                        <Button bsStyle="danger">About us</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/buyDigital.jpg" circle className="profile-pic"/>
                        <h3>HOLA SHARON MARIA</h3>
                        <p>That's a croocked tree.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/carrosCompra.jpg" circle className="profile-pic"/>
                        <h3>Compra facil</h3>
                        <p>That's a croocked tree.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/datafono.jpg" square className="profile-pic"/>
                        <h3>Ahorra</h3>
                        <p>That's a croocked tree.</p>
                    </Col>
                </Row>
            </Grid>
        )
    }
}