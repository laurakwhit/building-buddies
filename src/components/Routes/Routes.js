import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';

class Routes extends Component {
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
