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
          Design-Build Services
          New construction and remodeling
          Fire alarm systems installation
          Site lighting installation
          Building maintenance
          Interior lighting system installation
          Voice/Data/Video installation
          Nurse Call System installation
          Door entry and keyless system installation
          Energy conservation upgrades
          Retrofitting existing lighting systems
          Service calls
        </div>
      </div>
    );
  }
}

export default Home;
