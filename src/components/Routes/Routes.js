import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  getAllBuildings,
  getAllBuildingUsers
} from '../../utilities/buildingApiCalls';
import { getAllInterests } from '../../utilities/interestApiCalls';
import { addUser, addUserInterest } from '../../utilities/userApiCalls';

import LandingPage from '../LandingPage/LandingPage';
import MyProfile from '../MyProfile/MyProfile';
import MyNeighbors from '../MyNeighbors/MyNeighbors';
import BuildingInfo from '../BuildingInfo/BuildingInfo';
import NeighborProfile from '../NeighborProfile/NeighborProfile';

class Routes extends Component {
  state = {
    buildings: [],
    interests: [],
    currentUser: {},
    userBuilding: {},
    userInterests: [],
    neighbors: []
  };

  async componentDidMount() {
    const buildings = await getAllBuildings();
    const interests = await getAllInterests();
    this.setState({ buildings, interests });
  }

  userSignUp = async ({ name, email, password, searchValue, interests }) => {
<<<<<<< ba8755808dac764b6dcecb232ee80987d7ef95ca
    const { currentUser, userBuilding } = await this.setUser({
      name,
      email,
      password,
      searchValue
    });
    await this.userInterestPost(interests);
    this.setState({ currentUser, userBuilding, userInterests: interests });
=======
    const { currentUser, userBuilding } = await this.setUser({ name, email, password, searchValue })
    await this.userInterestPost(currentUser.id, interests)
    this.setState({ currentUser, userBuilding, userInterests: interests })
>>>>>>> Toggle user interests on profile
    this.props.history.push('/profile');
  };

  setUser = async ({ name, email, password, searchValue }) => {
    const { buildings } = this.state;
    const userBuilding = buildings.find(
      building => building.name.toLowerCase() === searchValue.toLowerCase()
    );
    const addedUser = await addUser({
      name,
      email,
      password,
      building_id: userBuilding.id
    });
    const currentUser = {
      name,
      email,
      building_id: userBuilding.id,
      id: addedUser.id
    };
    return { currentUser, userBuilding };
  };

<<<<<<< ba8755808dac764b6dcecb232ee80987d7ef95ca
  userInterestPost = interests => {
    interests.forEach(interest => {
      // POST each interest
      console.log(interest);
    });
  };

  getNeighbors = async () => {
    try {
      const { userBuilding } = this.state;
      const neighbors = await getAllBuildingUsers(userBuilding.id);
      this.setState({ neighbors });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const {
      buildings,
      currentUser,
      interests,
      userBuilding,
      neighbors
    } = this.state;
=======
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
>>>>>>> Toggle user interests on profile

    return (
      <>
        <Route
          exact
          path="/"
          render={() => (
            <LandingPage
              buildings={buildings}
              interests={interests}
              userSignUp={this.userSignUp}
            />
          )}
        />
        <Route
          exact
          path="/profile"
          render={() => (
            <MyProfile currentUser={currentUser} interests={interests} />
          )}
        />
        <Route
          exact
          path="/neighbors"
          render={() => (
            <MyNeighbors
              userBuilding={userBuilding}
              neighbors={neighbors}
              getNeighbors={this.getNeighbors}
            />
          )}
        />
        <Route
          exact
          path="/building"
          render={() => <BuildingInfo userBuilding={userBuilding} />}
        />
        <Route
          exact
          path="/neighbors/:neighbor_id"
          render={({ match }) => {
            const neighbor = neighbors.find(
              n => n.id === +match.params.neighbor_id
            );
            console.log(neighbors);
            return <NeighborProfile neighbor={neighbor} />;
          }}
        />
      </>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object,
  'history.push': PropTypes.func
};

export default withRouter(Routes);
