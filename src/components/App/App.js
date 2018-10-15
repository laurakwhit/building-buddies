import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import './App.scss';

class App extends Component {
  state = {
    buildings: [],
    interests: [],
    currentUser: {},
    userBuilding: {},
    userInterests: []
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
