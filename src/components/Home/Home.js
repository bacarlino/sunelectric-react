import React, { Component } from 'react';
import indysky from '../../images/indyskylinethin.jpg';
import indyskycrop from '../../images/indyskylinecrop.jpg';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container-fluid" id="home">
        <div className="row">
          <div className="col-md-12 home-bg">
            {/* <img src={indysky}></img> */}
          </div>
          <h1>Serving Indiana for 20 years.</h1>
        </div>
      </div>
    );
  }
}

export default Home;
