import React from 'react';
import PropTypes from 'prop-types';

import Nav from '../Nav/Nav';

import './BuildingInfo.scss';

const BuildingInfo = ({name, address, handleLogOut}) => {
  return (
    <div className='building-info'>
      <Nav handleLogOut={handleLogOut}/>
      <div className='main-content'>
        <h1>Building Info</h1>
        <h2>Name: {name}</h2>
        <h2>Address: {address}</h2>
      </div>
    </div>
    );
}

BuildingInfo.propTypes = {
  name: PropTypes.string,
  address: PropTypes.string,
  handleLogOut: PropTypes.func
};

export default BuildingInfo;
