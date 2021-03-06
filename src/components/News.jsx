import React, { Component } from 'react';
import './News.css';

export default class News extends Component{
    render(){
    return(
        <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="my-4">TIAKI OFFERS&nbsp;</h1>
            <div className="list-group">
              <a href="#" className="list-group-item">Food</a>
              <a href="#" className="list-group-item">Accesories</a>
              <a href="#" className="list-group-item">Others</a>
            </div>
            <p>&nbsp;&nbsp;  &nbsp; </p>
            
 
          </div>
          {/* /.col-lg-3 */}
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Item One</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">★ ★ ★ ★ ☆</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Item Two</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">★ ★ ★ ★ ☆</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Item Three</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">★ ★ ★ ★ ☆</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Item Four</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">★ ★ ★ ★ ☆</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Item Five</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">★ ★ ★ ★ ☆</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt /></a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">Item Six</a>
                    </h4>
                    <h5>$24.99</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">★ ★ ★ ★ ☆</small>
                  </div>
                </div>
              </div>
              
            </div>
            {/* /.row */}
          </div>
          {/* /.col-lg-9 */}
        </div>
        <div className="footer">
                <div className="small-print">
                    <div className="container">
                    <p><a href="#" target="_blank">Kristell Urueta</a> | <a href="#" target="_blank">JuanD Solano</a> | <a href="#" target="_blank">Sharon Figueroa</a>| <a href="#" target="_blank">Cristian Yepes</a></p>
                    <p>Copyright © 2018 - Allright Reserved</p>
                    </div>
                 </div>
             </div>
        {/* /.row */}
      </div>
    );
  }
}