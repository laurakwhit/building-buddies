import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { getAllBuildings } from '../../utilities/buildingApiCalls';

import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import MainContentContainer from '../MainContentContainer/MainContenteContainer';

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
    this.props.history.push('/home');
  };

  render() {
    const { buildings } = this.state;

    return (
      <>
        <Route
          exact
          path="/"
          render={() => (
            <LandingPage setUser={this.setUser} buildings={buildings} />
          )}
        />
        <Route exact path="/home" component={HomePage} />
      </>
    );
  }
}

export default withRouter(Routes);
