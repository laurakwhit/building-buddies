import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './LandingPage.scss';

import SignUpModal from '../SignUpModal/SignUpModal';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };
  }

  handleClick = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { modalOpen } = this.state;
    const { setUser, buildings } = this.props;

    return (
      <div className="landing-page">
        {modalOpen && (
          <SignUpModal
            handleModalClose={this.handleModalClose}
            setUser={setUser}
            buildings={buildings}
          />
        )}
        <h1>Hello!</h1>
        <button onClick={this.handleClick}>Sign Up</button>
      </div>
    );
  }
}

LandingPage.propTypes = {
  setUser: PropTypes.func.isRequired,
  buildings: PropTypes.array.isRequired
};

export default LandingPage;
