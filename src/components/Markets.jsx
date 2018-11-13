import React,   {Component} from 'react'
import{ Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Markets.css';

export default class Markets extends Component{
    render(){
        return(
            <Grid>    
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/markets/exito.png" circle className="profile-pic"/>
                        <h3> <a href="https://www.exito.com/"> ÉXITO </a> </h3> 
                    </Col>
                     <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/markets/falabella.png" circle className="profile-pic"/>
                        <h3> <a href="https://www.falabella.com.co/falabella-co/"> FALABELLA </a> </h3> 
                    </Col>
               
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/markets/JUMBO2.png" circle className="profile-pic"/>
                        <h3> <a href="https://www.tiendasjumbo.co/ofertas"> JUMBO </a> </h3> 
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/markets/logo-metro.png" circle className="profile-pic"/>
                        <h3> <a href="https://www.tiendasmetro.co/metrofertas/"> METRO </a> </h3> 
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/markets/surtimax png.png" circle className="profile-pic"/>
                        <h3> <a href="http://www.surtimax.com.co/ofertas"> SURTIMAX </a> </h3> 
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/markets/olimpica2.png" circle className="profile-pic"/>
                        <h3> <a href="http://www.olimpica.com/ofertas-olimpica"> OLIMPICA </a> </h3> 
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/markets/ara.png" circle className="profile-pic"/>
                        <h3> <a href="https://aratiendas.com/"> ARA </a> </h3> 
                    </Col>
                </Row>

                <div className="footer">
                    <div className="small-print">
                        <div className="container">
                        <p><a href="#" target="_blank">Kristell Urueta</a> | <a href="#" target="_blank">JuanD Solano</a> | <a href="#" target="_blank">Sharon Figueroa</a>| <a href="#" target="_blank">Cristian Yepes</a></p>
                        <p>Copyright © 2018 - <a href="https://twitter.com/asyaddien" target="_blank">Universidad del Norte, Colombia</a> - Allright Reserved</p>
                        </div>
                    </div>
                </div>
            </Grid>
         

        )
       
    }
    
}