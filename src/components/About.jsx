import React, {Component} from 'react'
import { Grid, Col, Image,Row } from 'react-bootstrap';
import './About.css';
// <Image src="assets/logotiaki_red.png" className="about-profile-pic" rounded/>
                    
export default class About extends Component{
    render(){
        return(
            <div>
                <Image src="assets/aboutbanner.jpg" className="header-image"/>
                <Grid>
                    {/*<Image src="assets/logotiaki.png" className="about-profile-pic" rounded/>*/}
                    <Row className="show-grid text-center">
                        <h3>About TIAKI</h3>
                        <p>Tiaki was born out of the need to find a place to buy at the lowest possible
                             market price. We give you in your hands the different options of supermarkets or
                              stores where you can get what you want and with the lowest prices. All you have to do is enter what you 
                            want and we help you choose the best decision, we hope you choose well!.</p>
                        <p>Our team of developers is made up of four students from the Universidad del Norte who have the mission of helping you save a few pesos on your purchases.</p>
                     </Row>

                       <h3>Contact info</h3>
                        <p> EMAIL: TIAKI@GMAIL.COM </p>
                        <p> TEL: 3003030</p>

                </Grid>
                <pre>  </pre>
               
                <div className="footer">
                    <div className="small-print">
                        <div className="container">
                            <p><a href="#" target="_blank">Kristell Urueta</a> | <a href="#" target="_blank">JuanD Solano</a> | <a href="#" target="_blank">Sharon Figueroa</a>| <a href="#" target="_blank">Cristian Yepes</a></p>
                            <p>Copyright © 2018 - <a href="https://twitter.com/asyaddien" target="_blank">Universidad del Norte, Colombia</a> - Allright Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}