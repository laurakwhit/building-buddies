import React, { Component } from 'react';
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

export default LandingPage;
