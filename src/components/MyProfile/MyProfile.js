import React, { Component } from 'react';
import Nav from '../Nav/Nav';

import './MyProfile.scss';

class MyProfile extends Component {
  render() {
    return (
      <div className="my-profile">
        <Nav />
        <div className="main-content">
          <h1>MyProfile</h1>
        </div>
      </div>
    );
  }
}

export default MyProfile;
