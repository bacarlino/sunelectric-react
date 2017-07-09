import React, { Component } from 'react';
import logo from '../../images/sunlogof5f5f5.jpg';
import './Nav.css'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img class="img-responsive" src={logo}></img></a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>

              {/* <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li> */}

            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default Nav;
