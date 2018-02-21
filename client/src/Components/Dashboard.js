import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';

import Navbar from './Navbar';
import WizardForm from './Form/WizardForm';
import Chatroom from './Chat/Chatroom';
import UserCard from './UserCard';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  handleSubmit(values) {
    this.props.createProfile(values)
  }

  renderBros() {
    const { users } = this.props
    if (users) {
      return users.map(user => {
        const { artists, bio, summary, name } = user
        return (
          <UserCard
            name={name}
            bio={bio}
            summary={summary}
            artists={artists}
          />
        )
      })
    }
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
          {this.renderBros()}
          <Chatroom />
        </div>
      )
    }
  }

  render() {
    console.log('USERS', this.props.users)
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
    auth: state.auth,
    users: state.users
  }
}

export default connect (mapStateToProps, actions)(Dashboard);
