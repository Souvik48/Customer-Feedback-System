import React, { Component } from "react";
import "../../../src/App.css"
class Footer extends Component {
  render() {
    return (
      <div>
      <footer className="page-footer blue">
         <div className="container">
            <div className="row">
            
              <div className="col l6 s12 right-align">
                <h5 className="white-text">Designed and Implement By :</h5>
              </div>
              <div className="col l4 offset-l2 s12 right-align">
              <h5 className="white-text" >Souvik Das </h5>
                <ul>
                  <li><a className="white-text text-lighten-3" href="mailtoiamsouvikdas48@gmail.com">Mail Me</a></li>
                  <li><a className="white-text text-lighten-3" href="7209280018">Call Me</a></li>
                  <li><a className="white-text text-lighten-3" href="https://www.facebook.com/iamsouvikdas48">Facebook</a></li>
                  <li><a className="white-text text-lighten-3" href="https://www.instagram.com/_souvik_036_/">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright center-align">
            <div className="container">
            © Souvik
            </div>
          </div>
        </footer>
        </div>
    );
  }
}

export default Footer;
