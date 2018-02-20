import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';
import Navbar from './Navbar';
import WizardForm from './Form/WizardForm';
import Chatroom from './Chat/Chatroom';

class Dashboard extends Component {
  handleSubmit(values) {
    this.props.createProfile(values)
  }

  renderDashboard() {
    const { auth } = this.props
    if (auth && !auth.bio) {
      return (
        <div>
          <WizardForm onSubmit={(values) => this.handleSubmit(values)} />
        </div>
      )
    } else if (auth && auth.bio && !auth.artists) {
      history.push('/spotify')
    } else {
      return (
        <div>
          {"Grid layout goes here"}
          <Chatroom />
        </div>
      )
    }
  }

  render() {
    console.log(this.props.auth)
    return (
      <div>
        <Navbar />
        {this.renderDashboard()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect (mapStateToProps, actions)(Dashboard);
