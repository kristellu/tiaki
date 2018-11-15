import React,   {Component} from 'react'
import{ Link } from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import Modal from 'react-modal';
import './Home.css';
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
        {/*<div class= "jumbotron">
          <div class="container">
            <div classs="row">
              <div class="col-sm-6 btn-holder"></div>
              <div class="col-sm-6">
              <h1><strong>BUY CHEAP IS SIMPLE</strong></h1>
              <h3>
                Find your favorite products with the best prices in the market.
              </h3>
              <a href="/about" class="btn btn-primary">MORE ABOUT TIAKI</a>
            </div>
          </div>
        </div>
    </div>*/}

      <Grid>     
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/list.jpeg" square className="profile-pic"/>
            <section>
              <h3> <a onClick={this.toggleModal}>Enter your list</a> </h3>
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
                              <p>Escribe el producto que buscas en el cuadro superior y <b>agrégalo a tu lista de compra.</b></p> 
                            </div>
                              <a href="#">Vaciar lista</a>
                              <div class="border-space ng-star-inserted"></div>
                              <div class="button-side-nav ng-star-inserted">
                                <div class="separator-line"></div>
                                <button> <a2 href="/markets">Buscar esta lista de productos</a2></button>
                              </div>
                          </div>
                    </div>
                </div>
                
              </Modal>
            </section>
           <p>Enter the products you are buying in two easy steps.</p> 
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/carrito.jpeg" square className="profile-pic"/>
              <h3> <a href="/markets"> Options to buy</a> </h3> 
              <p>Finding offers has never been easier.</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image src="assets/savemoney.png" square className="profile-pic"/>
              <h3> <a href="/login"> Save money</a> </h3> 
               <p>See how much you save by shopping with Tiaki.</p>
          </Col>
        </Row>

        <div className="center">
           <a href="/signup" class="btn btn-primary">SIGN UP</a>
        </div>

        <div className="footer">
          <div className="small-print">
            <div className="container">
              <p><a href="#" target="_blank">Kristell Urueta</a> | <a href="#" target="_blank">JuanD Solano</a> | <a href="#" target="_blank">Sharon Figueroa</a>| <a href="#" target="_blank">Cristian Yepes</a></p>
              <p>Copyright © 2018 - Allright Reserved</p>
            </div>
          </div>
        </div>

      </Grid>  
    </div>
    )
  }
}