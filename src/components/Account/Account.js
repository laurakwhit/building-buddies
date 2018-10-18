import React, { Component } from 'react';
import './Account.scss';
import Nav from '../Nav/Nav';

class Account extends Component {
  render() {
    const { handleLogOut } = this.props;
    return (
      <div className="account">
        <Nav handleLogOut={handleLogOut} />
        <div className="main-content">
          <h1>Account</h1>
        </div>
      </div>
    );
  }
}

export default Account;
