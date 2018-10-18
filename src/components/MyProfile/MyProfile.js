import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav from '../Nav/Nav';

import './MyProfile.scss';

class MyProfile extends Component {
  handleUserInterestChange = e => {
    const { updateUserInterests, interests } = this.props;
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
        <div key={index} className="checkbox-cell">
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
          <div className="basic-info">
            <img
              src={require('../../assets/profile.jpg')}
              alt="profile"
              className="profile-image"
            />

            <div className="user-info">
              <h2>{currentUser.name}</h2>
              <article>
                Humblebrag shabby chic gochujang coloring book, squid XOXO
                brunch tumeric selvage hammock vape. Lomo lumbersexual glossier,
                wayfarers skateboard irony humblebrag raclette taxidermy ennui
                freegan af craft beer PBR&B meh. Asymmetrical thundercats
                intelligentsia, lo-fi swag fingerstache palo santo skateboard
                flexitarian lyft selvage vice poke gluten-free. Kombucha ramps
                chambray street art messenger bag.
              </article>
            </div>
          </div>

          <form className="profile-interests">{displayedInterests}</form>
        </div>
      </div>
    );
  }
}

MyProfile.propTypes = {
  currentUser: PropTypes.object.isRequired,
  interests: PropTypes.array.isRequired,
  handleLogOut: PropTypes.func.isRequired,
  updateUserInterests: PropTypes.func.isRequired,
  userInterests: PropTypes.array.isRequired
};

export default MyProfile;
