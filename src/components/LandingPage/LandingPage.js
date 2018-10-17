import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './LandingPage.scss';

import SignUpModal from '../SignUpModal/SignUpModal';

class LandingPage extends Component {
  state = {
    modalOpen: false
  };

  handleClick = () => {
    this.setState({ modalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { modalOpen } = this.state;
    const { buildings, interests, userSignUp } = this.props;

    return (
      <div className="landing-page">
        {modalOpen && (
          <SignUpModal
            handleModalClose={this.handleModalClose}
            buildings={buildings}
            interests={interests}
            userSignUp={userSignUp}
          />
        )}
        <h1>Hello!</h1>
        <button onClick={this.handleClick}>Sign Up</button>
      </div>
    );
  }
}

LandingPage.propTypes = {
  buildings: PropTypes.array,
  interests: PropTypes.array,
  userSignUp: PropTypes.func
};

export default LandingPage;
