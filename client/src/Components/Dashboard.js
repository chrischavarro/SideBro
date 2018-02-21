import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';
import ScrollArea from 'react-scrollbar';

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

  renderUsers() {
    const { users } = this.props
    if (users) {
      return users.map(user => {
        const { artists, bio, summary, name, _id } = user
        return (
          <UserCard
            name={name}
            bio={bio}
            summary={summary}
            artists={artists}
            key={_id}
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
          {this.renderUsers()}
          <Chatroom />
        </div>
      )
    }
  }

  render() {
    console.log('USERS', this.props.users)
    return (
      <div className="row">
        <Navbar />
        <ScrollArea
          speed={0.8}
          horizontal={false}
        >
          <div className="col s10 offset-s1 card-1 dashboardUserContainer">
            {this.renderDashboard()}
          </div>
        </ScrollArea>
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
