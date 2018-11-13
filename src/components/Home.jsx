import React,   {Component} from 'react'
import{ Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

export default class Home extends Component{
    render(){
        return(
        <div>
        <div class= "jumbotron">
          <div class="container">
              <div classs="row">
                <div class="col-sm-6 btn-holder">
                </div>
                <div class="col-sm-6">
                  <h1><strong>BUY CHEAP IS SIMPLE</strong></h1>
                  <h3>
                    Find your favorite products with the best prices in the market.
                  </h3>
                  <a href="/about" class="btn btn-primary">MORE ABOUT TIAKI</a>
              </div>
          </div>
          </div>
        </div>

        <Grid>     
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/list.jpeg" square className="profile-pic"/>
              <h3> <a href="#"> Enter your list </a> </h3> 
              <p>Enter the products you are buying in two easy steps.</p> 
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/carrito.jpeg" square className="profile-pic"/>
              <h3> <a href="/markets"> Options to buy</a> </h3> 
              <p>Finding offers has never been easier.</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/saveMoney.jpeg" square className="profile-pic"/>
              <h3> <a href="hola.html"> Save money</a> </h3> 
               <p>See how much you save by shopping with Tiaki.</p>
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
      </div>
    )
    }
}