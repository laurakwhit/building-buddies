import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import './BuildingInfo.scss';

const BuildingInfo = ({name, address}) => {
  return (
    <div className='building-info'>
      <Nav />
      <div className='main-content'>
        <h1>Building Info</h1>
        <h2>Name: {name}</h2>
        <h2>Address: {address}</h2>
      </div>
    </div>
    );
}

export default BuildingInfo;
