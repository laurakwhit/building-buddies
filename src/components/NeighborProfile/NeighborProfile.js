import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getUserInterests } from '../../utilities/userApiCalls';

import Nav from '../Nav/Nav';

import './NeighborProfile.scss';

class NeighborProfile extends Component {
  state = {
    neighborInterests: []
  };

  async componentDidMount() {
    const { neighbor } = this.props;
    const neighborInterests = await getUserInterests(neighbor.id);
    this.setState({ neighborInterests });
  }

  render() {
    const { neighbor } = this.props;
    const { neighborInterests } = this.state;
    let displayNeighborInterests;

    if (!neighborInterests.length) {
      displayNeighborInterests = (
        <p>This user does not have any interests yet!</p>
      );
    } else {
      displayNeighborInterests = neighborInterests.map(
        (neighborInterest, i) => (
          <p key={`${neighborInterest.id}-${i}`}>{neighborInterest.name}</p>
        )
      );
    }

    return (
      <div className="neighbor-profile">
        <Nav />
        <div className="main-content">
          <Link className="neighbors-link" to={'/neighbors'}>
            <i className="fas fa-angle-left" />
          </Link>
          <img
            src={require('../../assets/profile.jpg')}
            alt="profile"
            className="profile-image"
          />
          <h1>{neighbor.name} likes...</h1>
          <div className="interests-container">{displayNeighborInterests}</div>
        </div>
      </div>
    );
  }
}

NeighborProfile.propTypes = {
  neighbor: PropTypes.object.isRequired
};

export default NeighborProfile;
