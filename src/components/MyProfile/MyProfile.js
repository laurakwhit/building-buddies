import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getUserInterests } from '../../utilities/userApiCalls';
import { addUserInterest, deleteUserInterest } from '../../utilities/userApiCalls';

import Nav from '../Nav/Nav';

import './MyProfile.scss';

class MyProfile extends Component {
  state = {
    userInterests: []
  };

  async componentDidMount() {
    const userInterests = await getUserInterests(this.props.currentUser.id);
    this.setState({ userInterests });
  }

  updateUserInterests = (e) => {
    const { userInterests } = this.state;
    const { currentUser } = this.props;
    const interest = JSON.parse(e.target.value);
    
    userInterests.forEach(async i => {
      let updatedInterests = [];
      if (i.name === interest.name) {
        updatedInterests = userInterests.filter(i => i.name !== interest.name);
        // await deleteUserInterest(currentUser.id, i.id)
      } else {
        updatedInterests = [...userInterests, interest];
        // await addUserInterest(currentUser.id, i.id);
      }
      this.setState({ userInterests: updatedInterests })
    })

  }

  render() {
    const { currentUser, interests, handleLogOut } = this.props;
    const { userInterests } = this.state;
    const displayedInterests = interests.map((interest, index) => {
      const checked = userInterests.find(i => i.name === interest.name);

      return <div key={index}>
        <input 
          type="checkbox" 
          name={interest.name} 
          value={JSON.stringify(interest)} 
          checked={checked} 
          onChange={this.updateUserInterests}/> 
        <label htmlFor={interest.name}>{interest.name}</label>
      </div>;
    });

    return (
      <div className="my-profile">
        <Nav handleLogOut={handleLogOut} />
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
  interests: PropTypes.array,
  handleLogOut: PropTypes.func
};

export default MyProfile;
