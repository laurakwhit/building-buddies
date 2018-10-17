import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUserInterests } from '../../utilities/userApiCalls';
import Nav from '../Nav/Nav';

import './MyProfile.scss';

class MyProfile extends Component {
  state = {
    userInterests: []
  }

  async componentDidMount() {
    const userInterests = await getUserInterests(this.props.currentUser.id);
    this.setState(userInterests);
  }

  render() {
    const { currentUser, interests } = this.props;
    const { userInterests } = this.state;
    console.log(interests)
    const displayedInterests = interests.map((interest, index) => {
      const checked = userInterests.includes(interest.name);
      return <div key={index}>
        <input type="checkbox" name={interest.name} value={interest.name} checked={checked} onClick={this.updateUserInterests}/> 
        <label htmlFor={interest.name}>{interest.name}</label>
      </div>
    })
    return (
      <div className="my-profile">
        <Nav />
        <div className="main-content">
          <img src={require('../../assets/profile.jpg')} alt='profile' />
          <h2>{currentUser.name}</h2>
          <article>
            Humblebrag shabby chic gochujang coloring book, squid XOXO brunch tumeric
            selvage hammock vape. Lomo lumbersexual glossier, wayfarers skateboard irony
            humblebrag raclette taxidermy ennui freegan af craft beer PBR&B meh. Asymmetrical
            thundercats intelligentsia, lo-fi swag fingerstache palo santo skateboard
            flexitarian lyft selvage vice poke gluten-free. Kombucha ramps chambray street
            art messenger bag.
          </article>
          <div>
            {displayedInterests}
          </div>
        </div>
      </div>
    );
  }
}

MyProfile.propTypes = {
  currentUser: PropTypes.object,
  'currentUser.id': PropTypes.num,
  interests: PropTypes.array
};

export default MyProfile;
