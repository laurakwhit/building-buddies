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
    this.setState({ buildings });
  }

  setUser = ({ name, email, searchValue }) => {
    const currentUser = { name, email };
    this.setState({ currentUser, userBuilding: searchValue });
  };

  render() {
    const { buildings } = this.state;

    return (
      <Router>
        <>
          <Route
            exact
            path="/"
            render={() => (
              <LandingPage setUser={this.setUser} buildings={buildings} />
            )}
          />
        </>
      </Router>
    );
  }
}

export default Routes;
