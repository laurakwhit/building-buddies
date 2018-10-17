import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  getAllBuildings,
  getAllBuildingUsers
} from '../../utilities/buildingApiCalls';
import { getAllInterests } from '../../utilities/interestApiCalls';
import {
  addUser,
  addUserInterest,
  deleteUserInterest
} from '../../utilities/userApiCalls';

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
    neighbors: [],
    error: ''
  };

  async componentDidMount() {
    const buildings = await getAllBuildings();
    const interests = await getAllInterests();
    this.setState({ buildings, interests });
  }

  userSignUp = async ({ name, email, password, searchValue, interests }) => {
    const setUser = await this.setUser({
      name,
      email,
      password,
      searchValue
    });

    if (!setUser) {
      return alert(this.state.error);
    }

    const { currentUser, userBuilding } = setUser;
    await this.userInterestPost(currentUser.id, interests);
    this.setState({ currentUser, userBuilding, userInterests: interests });
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
    if (addedUser.id) {
      const currentUser = {
        name,
        email,
        building_id: userBuilding.id,
        id: addedUser.id
      };
      return { currentUser, userBuilding };
    } else {
      this.setState({ error: addedUser.error });
    }
  };

  userInterestPost = (userId, interests) => {
    interests.forEach(async interest => {
      await addUserInterest({ user_id: userId, interest_id: interest.id });
    });
  };

  updateUserInterests = async clickedInterest => {
    const { currentUser, userInterests } = this.state;
    let newUserInterests;

    const alreadyInterested = userInterests.find(userInterest => {
      console.log('userInterest', userInterest);
      console.log('clickedInterest', clickedInterest);
      return userInterest.id === clickedInterest.id;
    });

    if (alreadyInterested) {
      newUserInterests = userInterests.filter(
        userInterest => userInterest.id !== clickedInterest.id
      );
      await deleteUserInterest({
        user_id: currentUser.id,
        interest_id: clickedInterest.id
      });
    } else {
      newUserInterests = [...userInterests, clickedInterest];
      await addUserInterest({
        user_id: currentUser.id,
        interest_id: clickedInterest.id
      });
    }

    this.setState({ userInterests: newUserInterests });
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

  handleLogOut = () => {
    this.setState({
      currentUser: {},
      userBuilding: {},
      userInterests: []
    });
  };

  render() {
    const {
      buildings,
      currentUser,
      interests,
      userBuilding,
      neighbors,
      userInterests
    } = this.state;

    if (currentUser.name) {
      return (
        <>
          <Route
            exact
            path="/profile"
            render={() => (
              <MyProfile
                currentUser={currentUser}
                interests={interests}
                handleLogOut={this.handleLogOut}
                userInterests={userInterests}
                updateUserInterests={this.updateUserInterests}
              />
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
                handleLogOut={this.handleLogOut}
              />
            )}
          />
          <Route
            exact
            path="/building"
            render={() => (
              <BuildingInfo
                name={userBuilding.name}
                address={userBuilding.address}
                handleLogOut={this.handleLogOut}
              />
            )}
          />
          <Route
            exact
            path="/neighbors/:neighbor_id"
            render={({ match }) => {
              const neighbor = neighbors.find(
                n => n.id === +match.params.neighbor_id
              );
              return (
                <NeighborProfile
                  neighbor={neighbor}
                  handleLogOut={this.handleLogOut}
                />
              );
            }}
          />
        </>
      );
    }

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
      </>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object,
  'history.push': PropTypes.func
};

export default withRouter(Routes);
