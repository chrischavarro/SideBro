import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';
import ScrollArea from 'react-scrollbar';
import AnimateHeight from 'react-animate-height';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import Navbar from './Navbar';
import WizardForm from './Form/WizardForm';
import UserCard from './UserCard';
import MusicFilter from './Filters/MusicFilter';
import TagFilter from './Filters/TagFilter';
import LocationFilter from './Filters/LocationFilter';

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
          <ReactCSSTransitionGroup
            transitionName="dashboardEnter" 
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}
          >
            {this.renderUsers()}
          </ReactCSSTransitionGroup>
        </div>
      )
    }
  }


  render() {
    let scrollbarStyles = {borderRadius: 5};
    return (
      <div className="row">
        <Navbar />
          <div className="col s10 offset-s1 card-1 filterDiv">
            Filter By
            <MusicFilter />
            <TagFilter />
            <LocationFilter />
          </div>
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

export default connect(mapStateToProps, actions)(Dashboard);
