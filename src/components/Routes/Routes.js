import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getAllBuildings } from '../../utilities/apiCalls';
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

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
        </div>
      </Router>
    );
  }
}

export default Routes;
