import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Nav.scss';

const Nav = () => {
  return (
    <div className='Nav_Section'>
      <img src='../assets/profile.jpg' alt='profile picture'/>
      <nav>
        <NavLink
          to='/profile'>
          My Profile
        </NavLink>
        <NavLink
          to='/neighbors'>
          My Neighbors
        </NavLink>
        <NavLink
          to='/building'>
          Building Info
        </NavLink>
        <NavLink
          to='/'>
          Log Out
        </NavLink>
      </nav>
    </div>
  )
}

export default Nav;

Nav.propTypes = {

};
