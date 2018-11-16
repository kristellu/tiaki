import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
    CardTitle, CardHeader,CardSubtitle, Button,
    Container,CardBody } from 'reactstrap';
import './News.css';

import {Jumbotron, Grid, Row, Col, Image} from 'react-bootstrap';
import Modal from 'react-modal';
import TodoItems from "./TodoItems";
import{ Link } from 'react-router-dom';

export default class News extends Component{
    render(){
    return(
        <div>
            <div className="product-info">
                <div className="product-img">
                     <div className="content-img"><app-img-ssr>
                        <img src="https://images.rappi.com/products/2090094016-1531262088.png?d=200x200&e=webp" alt="Vino Reserva Sauvignon Alto Los Carneros 1 ml" title="Vino Reserva Sauvignon Alto Los Carneros 1 ml" className=" ng-lazyloaded" /></app-img-ssr>
                    </div>
                </div>{/**/}
                <div className="promo-discount ng-star-inserted">-34%</div>
                <div className="cont-info-product">{/**/}
                    <button className="ng-star-inserted"> Agregar <span class="visible-mobile">+</span></button>
                     <p className="product-saving ng-star-inserted"><span>-34%</span> Ahorra $&nbsp;15.011 </p>
                     <p className="product-price product-real-price"> $&nbsp;29.139 {/**/}<span className="product-price-before ng-star-inserted"> $&nbsp;44.150 </span></p>
                    <p className="product-name">Vino Reserva Sauvignon Alto Los Carneros 1 ml</p>
                    <p className="product-description">Vino Reserva Sauvignon Alto Los Carneros 1 ml PLU: 13...</p>
                </div>
            </div>

            <div className="cont-info-product">{/**/}
                <p className="product-saving ng-star-inserted"><span>-34%</span> Ahorra $&nbsp;15.011 </p>
                <p className="product-price product-real-price"> $&nbsp;29.139 {/**/}<span className="product-price-before ng-star-inserted"> $&nbsp;44.150 </span></p>
                <p className="product-name">Vino Reserva Sauvignon Alto Los Carneros 1 ml</p>
                <p className="product-description">Vino Reserva Sauvignon Alto Los Carneros 1 ml PLU: 13...</p>
            </div>
            <p class="product-saving ng-star-inserted"><span>-34%</span> Ahorra $&nbsp;15.011 </p>
            <p className="product-price product-real-price"> $&nbsp;29.139 {/**/}<span className="product-price-before ng-star-inserted"> $&nbsp;44.150 </span></p>
            <p class="product-name">Vino Reserva Sauvignon Alto Los Carneros 1 ml</p>
            
        </div>
        
    )
  }
}

