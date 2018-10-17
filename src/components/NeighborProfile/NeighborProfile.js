import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav/Nav';

import './NeighborProfile.scss';

class NeighborProfile extends Component {
  render() {
    const { neighbor } = this.props;
    return (
      <div className="neighbor-profile">
        <Nav />
        <div className="main-content">
          <h1>{neighbor.name}</h1>
        </div>
      </div>
    );
  }
}

NeighborProfile.propTypes = {
  neighbor: PropTypes.object.isRequired
};

export default NeighborProfile;
