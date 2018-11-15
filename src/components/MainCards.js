import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import News from './News';

export default class MainCards extends Component {
  constructor() {
    super();
   this.state = {
      people: [
        {
          id: 1,
          name: "David Davidson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        },
        {
          id: 2,
          name: "Mark Markson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        },
        {
          id: 3,
          name: "Judy Judyson",
          company: "Some Company, Inc",
          description: "Met at a party. Will connect with later"
        }
        
      ]
    }
  }

  removePerson(id) {
    this.setState({ people: this.state.people.filter(person => person.id !== id)});
  }

  render () {
    let News = this.state.people.map(person => {
      return (
        <Col sm="">
          <News key={person.id} removePerson={this.removePerson.bind(this)} person={person} />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {News}
        </Row>
      </Container>
    )
  }
  }
