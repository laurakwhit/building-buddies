import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
