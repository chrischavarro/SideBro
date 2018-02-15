import React, { Component } from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import SpotifySetup from './Components/Form/SpotifySetup';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './actions';
import history from './history';

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
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
