import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav from '../Nav/Nav';

import './MyProfile.scss';

class MyProfile extends Component {
  handleUserInterestChange = e => {
    const { updateUserInterests, interests } = this.props;
    console.log('interests', interests);
    console.log('target', e.target.name);
    const clickedInterest = interests.find(
      interest => interest.id === parseInt(e.target.name)
    );

    updateUserInterests(clickedInterest);
  };

  render() {
    const { currentUser, interests, handleLogOut, userInterests } = this.props;

    const displayedInterests = interests.map((interest, index) => {
      let checked = userInterests.find(
        userInterest => userInterest.id === interest.id
      );

      checked ? (checked = true) : (checked = false);

      return (
        <div key={index}>
          <input
            type="checkbox"
            name={interest.id}
            onChange={this.handleUserInterestChange}
            checked={checked}
          />
          <label htmlFor={interest.id}>{interest.name}</label>
        </div>
      );
    });

    return (
      <div className="my-profile">
        <Nav handleLogOut={handleLogOut} />
        <div className="main-content">
          <img src={require('../../assets/profile.jpg')} alt="profile" />
          <h2>{currentUser.name}</h2>
          <article>
            Humblebrag shabby chic gochujang coloring book, squid XOXO brunch
            tumeric selvage hammock vape. Lomo lumbersexual glossier, wayfarers
            skateboard irony humblebrag raclette taxidermy ennui freegan af
            craft beer PBR&B meh. Asymmetrical thundercats intelligentsia, lo-fi
            swag fingerstache palo santo skateboard flexitarian lyft selvage
            vice poke gluten-free. Kombucha ramps chambray street art messenger
            bag.
          </article>
          <form>{displayedInterests}</form>
        </div>
      </div>
    );
  }
}

MyProfile.propTypes = {
  currentUser: PropTypes.object,
  interests: PropTypes.array,
  handleLogOut: PropTypes.func,
  updateUserInterests: PropTypes.func.isRequired,
  userInterests: PropTypes.array.isRequired
};

export default MyProfile;
