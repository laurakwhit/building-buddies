import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../Nav/Nav';

import './BuildingInfo.scss';

const BuildingInfo = ({ name, address, handleLogOut }) => {
  return (
    <div className="building-info">
      <Nav handleLogOut={handleLogOut} />
      <div className="main-content">
        <div className="building-details">
          <h1>Building Info</h1>
          <h2>
            Name: <span>{name}</span>
          </h2>
          <h2>
            Address: <span>{address}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

BuildingInfo.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  handleLogOut: PropTypes.func
};

export default BuildingInfo;
