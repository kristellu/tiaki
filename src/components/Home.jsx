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
                </Jumbotron>
                <Link to= "/about">
                    <Button bsStyle="primary">About us</Button>
                </Link>
            </Grid>
        )
    }
}