import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import { getAllBuildings } from '../../utilities/apiCalls';
import './App.scss';

class App extends Component {
  state = {
    buildings: [],
    interests: [],
    currentUser: {},
    userBuilding: {},
    userInterests: []
  }

  async componentDidMount() {
    const buildings = await getAllBuildings();
    console.log(buildings)
  }

  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
