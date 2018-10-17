import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getAllBuildings } from '../../utilities/buildingApiCalls';
import { getAllInterests } from '../../utilities/interestApiCalls';
import { addUser, addUserInterest } from '../../utilities/userApiCalls';

import LandingPage from '../LandingPage/LandingPage';
import MyProfile from '../MyProfile/MyProfile';
import MyNeighbors from '../MyNeighbors/MyNeighbors';
import BuildingInfo from '../BuildingInfo/BuildingInfo';

class Routes extends Component {
  state = {
    buildings: [],
    interests: [],
    currentUser: {},
    userBuilding: {},
    userInterests: []
  };

  async componentDidMount() {
    const buildings = await getAllBuildings();
    const interests = await getAllInterests();
    this.setState({ buildings, interests });
  }

  userSignUp = async ({ name, email, password, searchValue, interests }) => {
    const { currentUser, userBuilding } = await this.setUser({ name, email, password, searchValue })
    await this.userInterestPost(currentUser.id, interests)
    this.setState({ currentUser, userBuilding, userInterests: interests })
    this.props.history.push('/profile');
  }

  setUser = async ({ name, email, password, searchValue }) => {
    const { buildings } = this.state;
    const userBuilding = buildings.find(building => building.name.toLowerCase() === searchValue.toLowerCase());
    const addedUser = await addUser({ name, email, password, building_id: userBuilding.id });
    const currentUser = { name, email, building_id: userBuilding.id, id: addedUser.id};
    return { currentUser, userBuilding }
  };

  userInterestPost = (userId, interests) => {
    interests.forEach(async (interest) => {
      await addUserInterest(userId, interest.id)
    })
  }

  render() {
    const { 
      buildings, 
      currentUser, 
      interests, 
      userInterests,
      userBuilding } = this.state;

    if (currentUser.name) {
      return (
        <>
          <Route exact path="/profile" render={() => (
            <MyProfile currentUser={currentUser} interests={interests} />
          )} />
          <Route exact path="/neighbors" render={() => (
            <MyNeighbors userBuilding={userBuilding}/>
          )} />
          <Route exact path="/building" render={() => (
            <BuildingInfo name={userBuilding.name} address={userBuilding.address} />
          )} />
        </>
      )
    }

    return (
      <>
        <Route
          exact
          path="/"
          render={() => (
            <LandingPage buildings={buildings} interests={interests} userSignUp={this.userSignUp}/>
          )}
        />
      </>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object,
  "history.push": PropTypes.func
}

export default withRouter(Routes);
