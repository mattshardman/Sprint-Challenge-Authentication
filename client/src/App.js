import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Jokes from './components/Jokes';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/jokes" component={Jokes} />
      </Router>
    );
  }
}

export default App;
