import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getAllBuildings } from '../../utilities/buildingApiCalls';

import LandingPage from '../LandingPage/LandingPage';

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
    console.log(buildings);
  }

  setUser = ({ name, email }) => {
    const currentUser = { name, email };
    this.setState({ currentUser });
  };

  render() {
    return (
      <Router>
        <>
          <Route
            exact
            path="/"
            render={() => <LandingPage setUser={this.setUser} />}
          />
        </>
      </Router>
    );
  }
}

export default Routes;
