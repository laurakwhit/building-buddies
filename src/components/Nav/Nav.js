import React from 'react';

import './Nav.scss';

const Nav = () => {
  return (
    <div className='Nav_Section'>
      <img src='../assets/profile.jpg' alt='profile picture'/>
      <nav>
        <p>My Profile</p>
        <p>My Neighbors</p>
        <p>Building Info</p>
        <p>Log Out</p>
      </nav>
    </div>
  )
}

export default Nav;