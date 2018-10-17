import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

import './Nav.scss';

const Nav = ({ handleLogOut }) => (
    <div className='nav__section'>
      <img src={require('../../assets/profile.jpg')} alt='profile'/>
      <nav>
        <NavLink
          className='nav__section-links'
          activeClassName='selected'
          to='/profile'>
          My Profile
        </NavLink>
        <NavLink
          className='nav__section-links'
          activeClassName='selected'
          to='/neighbors'>
          My Neighbors
        </NavLink>
        <NavLink
          className='nav__section-links'
          activeClassName='selected'
          to='/building'>
          Building Info
        </NavLink>
        <NavLink
          className='nav__section-links'
          onClick={handleLogOut}
          to='/'>
          Log Out
        </NavLink>
      </nav>
    </div>
);

Nav.propTypes = {
  handleLogOut: PropTypes.func
};

export default Nav;
