import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button,Container,Row,Col } from 'reactstrap';
import './News.css';


export default class News extends Component{
    constructor(props) {
        super(props);
      }

      render() {   
       
       return (
          <div>
                 {/*People card*/}
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBlock>
                    <CardTitle>{this.props.person.name}</CardTitle>
                    <CardSubtitle>{this.props.person.company}</CardSubtitle>
                    <CardText>{this.props.person.description}</CardText>
                    <Button >Delete</Button>
                    </CardBlock>
                </Card>  
          </div>
        )
    }
}




