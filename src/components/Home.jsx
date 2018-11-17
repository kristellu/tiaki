import React,   {Component} from 'react'
//import{ Link } from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import Modal from 'react-modal';
import './Home.css';
import { Card} from 'reactstrap';
import TodoItems from "./TodoItems";

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state={
      isActive:false,
            items:[]
    };
    this.addItem=this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentWillMount(){
     Modal.setAppElement('body');
  }

  toggleModal=()=>{
    this.setState({
      isActive:!this.state.isActive
    })
  }

  addItem(e){
    if(this._inputElement.value!==""){
      var newItem={
        text:this._inputElement.value,
        key: Date.now()
        };
      this.setState((prevState) =>{
      return{
      items:prevState.items.concat(newItem)
      };
    });
    }
   this._inputElement.value="";
   console.log(this.state.items);
   e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
    });

    this.setState({
    items: filteredItems,
    });
  }

  render(){
    return(
      <div>
      <Grid>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Card onClick={this.toggleModal}>
            <div className="card-body">
            <img width="100%" src="assets/checklist.png" alt="Card image cap"></img>
            <section>
               <h3> <a onClick={this.toggleModal} className="card-title">Enter your list</a> </h3>
                <Modal isOpen={this.state.isActive} onRequestClose={this.toggleModal}>
                    <div>
                      <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap-theme.min.css" />
                      <link rel="stylesheet" href="//netdna.bootstrapcdn.cxom/bootstrap/3.0.3/css/bootstrap.min.css" />
                      <div className="form-group">
                        <h1>Products <small>List</small></h1>
                        <div className="todoListMain">
                          <div className="header">
                            <form onSubmit={this.addItem}>
                              <input ref={(a) => this._inputElement = a} placeholder="Enter your list">
                              </input>
                              <button type="submit">ADD</button>
                            </form>
                          </div>
                          <TodoItems entries={this.state.items} delete={this.deleteItem}/>
                        <div>
                       <p>Type the product you are looking for in the box above and <b>add it to your shopping list.</b></p>
                      </div>
                      <a href="#">Empty list</a>

                      <div class="border-space ng-star-inserted"></div>
                        <div class="button-side-nav ng-star-inserted">
                          <div class="separator-line"></div>
                            <button><a href="/markets" style={{color: '#FFFFFF'}}>Search this product list</a></button>
                          </div>
                        </div>
                      </div>

                    </div>
                </Modal>
            </section>
              <p>Enter the products you are buying in two easy steps.</p>
            </div>
          </Card>
        </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Card>
              <div className="card-body" className="card-side">
                <img width="100%" src="assets/shopping-cart.png" alt="Card image cap"></img>
                <h3> <a href="/markets"> Options to buy</a> </h3>
                <p className="card-text">A place where you can find the best deals on the market </p>
              </div>
            </Card>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Card>
              <div className="card-body">
                <img width="100%" src="assets/cost.png" alt="Card image cap"></img>
                <h3> <a href="/login"> Save money</a> </h3>
                <p className="card-text">See how much you save by shopping with Tiaki.</p>
              </div>
            </Card>
          </Col>
        </Row>

        <div className="center">
          <a href="/signup" class="btn btn-primary" onClick={this.toggleModal}>SIGN UP</a>

        </div>

        <div className="footer">
          <div className="small-print">
            <div className="container">
              <p><a href="#" target="_blank">Kristell Urueta</a> |
              <a href="#" target="_blank">JuanD Solano</a> |
              <a href="#" target="_blank">Sharon Figueroa</a>|
              <a href="#" target="_blank">Cristian Yepes</a></p>
              <p>Copyright © 2018 - Allright Reserved</p>
            </div>
          </div>
        </div>

      </Grid>
    </div>
  );
}
}
