import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import history from './history';

import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import SpotifySetup from './Components/Form/SpotifySetup';
import Setup from './Components/Setup';
import Onboarding from './Components/Onboarding';
import ChatDescription from './Components/ChatDescription';
import FriendRequests from './Components/FriendRequests' ;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/spotify" component={SpotifySetup}/>
            <Route exact path="/setup/:accessToken/:refreshToken" component={Setup}/>
            <Route exact path="/getting-started" component={Onboarding}/>
            <Route exact path="/chatting" component={ChatDescription}/>
            <Route exact path="/requests" component={FriendRequests}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
