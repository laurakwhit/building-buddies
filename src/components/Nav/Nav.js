import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Nav.scss';

const Nav = () => {
  return (
    <div className='nav__section'>
      <img src={require('../../assets/profile.jpg')} alt='profile picture'/>
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
          activeClassName='selected'
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
