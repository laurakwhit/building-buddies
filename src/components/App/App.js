import React, { Component } from 'react';
import { getAllBuildings } from '../../utilities/apiCalls';
import Routes from '../Routes/Routes';
import './App.scss';

class App extends Component {
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
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
