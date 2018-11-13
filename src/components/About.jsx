import React, {Component} from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';
// <Image src="assets/logotiaki_red.png" className="about-profile-pic" rounded/>
                    
export default class About extends Component{
    render(){
        return(
            <div>
                <Image src="assets/bannerAbout.jpg" className="header-image"/>
                <Grid>
                    <Col xs={12} sm={10} smOffset={2}>
                        <h3>About TIAKI</h3>
                        <p>Tiaki was born out of the need to find a place to buy at the lowest possible market price. We give you in your hands the different options of supermarkets or stores where you can get what you want and with the lowest prices. All you have to do is enter what you want and we help you choose the best decision, we hope you choose well!.</p>
                        <p>Our team of developers is made up of four students from the Universidad del Norte who have the mission of helping you save a few pesos on your purchases.</p>
                     </Col>
                </Grid>
            </div>
        )
    }
}