import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import './MyNeighbors.scss';

class MyNeighbors extends Component {
  async componentDidMount() {
    const { getNeighbors } = this.props;
    await getNeighbors();
  }

  displayNeighbors = () => {
    const { neighbors } = this.props;
    if (!neighbors) return <LoadingSpinner />;
    return neighbors.map((neighbor, i) => (
      <div className="neighbor" key={`${neighbor.name}-${i}`}>
        <Link to={`/neighbors/${neighbor.id}`}>{neighbor.name}</Link>
      </div>
    ));
  };

  render() {
    const displayNeighbors = this.displayNeighbors();

    return (
      <div className="my-neighbors">
        <Nav />
        <div className="main-content">{displayNeighbors}</div>
      </div>
    );
  }
}

MyNeighbors.propTypes = {
  userBuilding: PropTypes.object.isRequired,
  neighbors: PropTypes.array.isRequired
};

export default MyNeighbors;
