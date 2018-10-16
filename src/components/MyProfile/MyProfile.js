import React, { Component } from 'react';
import Nav from '../Nav/Nav';

import './MyProfile.scss';

class MyProfile extends Component {
  render() {
    return (
      <div className="my-profile">
        <Nav />
        <div className="main-content">
          <img src={require('../../assets/profile.jpg')} alt='profile' />
          <h2>Name</h2>
          <article>
            Humblebrag shabby chic gochujang coloring book, squid XOXO brunch tumeric
            selvage hammock vape. Lomo lumbersexual glossier, wayfarers skateboard irony
            humblebrag raclette taxidermy ennui freegan af craft beer PBR&B meh. Asymmetrical
            thundercats intelligentsia, lo-fi swag fingerstache palo santo skateboard
            flexitarian lyft selvage vice poke gluten-free. Kombucha ramps chambray street
            art messenger bag.
          </article>
          <div>
            <h4>interest</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
