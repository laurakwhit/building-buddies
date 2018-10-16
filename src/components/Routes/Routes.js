import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getAllBuildings } from '../../utilities/buildingApiCalls';
import { getAllInterests } from '../../utilities/interestApiCalls';

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

  setUser = ({ name, email, searchValue }) => {
    const { buildings } = this.state;
    const currentUser = { name, email };
    const userBuilding = buildings.find(building => building.name.toLowerCase() === searchValue.toLowerCase());
    this.setState({ currentUser, userBuilding });
    this.props.history.push('/profile');
  };

  render() {
    const { buildings, currentUser, interests } = this.state;

    return (
      <>
        <Route
          exact
          path="/"
          render={() => (
            <LandingPage setUser={this.setUser} buildings={buildings} />
          )}
        />
        <Route exact path="/profile" render={() => (
          <MyProfile currentUser={currentUser} interests={interests}/>
        )} />
        <Route exact path="/neighbors" render={() => (
          <MyNeighbors userBuilding={userBuilding}/>
          )} />
        <Route exact path="/building" render={() => (
          <BuildingInfo userBuilding={userBuilding} />
          )} />
      </>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object,
  "history.push": PropTypes.func
}

export default withRouter(Routes);
