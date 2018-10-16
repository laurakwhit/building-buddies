import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

const Nav = () => (
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
          to='/'>
          Log Out
        </NavLink>
      </nav>
    </div>
);

export default Nav;
