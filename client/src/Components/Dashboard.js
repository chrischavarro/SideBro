import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';
import ScrollArea from 'react-scrollbar';
import AnimateHeight from 'react-animate-height';

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
    let scrollbarStyles = {borderRadius: 5};
    console.log(this.props.users)
    return (
      <div className="row">
        <Navbar />
          <div className="col s10 offset-s1 card-1 dashboardUserContainer">
            <ScrollArea
              className="area"
              contentClassName="content"
              verticalScrollbarStyle={scrollbarStyles}
              verticalContainerStyle={scrollbarStyles}
              horizontalScrollbarStyle={scrollbarStyles}
              horizontalContainerStyle={scrollbarStyles}
              smoothScrolling= {true}
              minScrollSize={40}
            >
              {this.renderDashboard()}
            </ScrollArea>
          </div>
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
