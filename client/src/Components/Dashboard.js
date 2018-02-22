import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import history from '../history';
import ScrollArea from 'react-scrollbar';
import AnimateHeight from 'react-animate-height';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types'

import Navbar from './Navbar';
import WizardForm from './Form/WizardForm';
import Chatroom from './Chat/Chatroom';
import UserCard from './UserCard';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removeSelected: true,
      disabled: false,
      stayOpen: false,
      artistValue: [],
      rtl: false
    }
  }

  propTypes: {
    label: PropTypes.string,
  }

  handleSelectChange(artistValue) {
    console.log('You have selected', artistValue)
    // const { artistValue } = this.state;
    this.setState({ artistValue });
  }

  toggleRtl(e) {
    let rt1 = e.target.checkd;
    this.setState({ rt1 });
  }

  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchAllArtists()
  }

  handleSubmit(values) {
    this.props.createProfile(values)
  }

  renderArtistFilters() {
    const artistFilters = this.props.filters
    let artistLabels = []
    if (artistFilters) {
      artistFilters.forEach(artist => {
        artistLabels.push({ label: artist.name, value: artist._id })
      })
    }
    const { disabled, stayOpen, artistValue } = this.state;
    return (
      <div className="col s3">
        <Select
          closeOnSelect={false}
          disabled={disabled}
          multi
          onChange={this.handleSelectChange.bind(this)}
          options={artistLabels}
          placeholder="Select Artists"
          removeSelected={this.state.removeSelected}
          rt1={this.state.rt1}
          simpleValue
          value={artistValue}
        />
      </div>
    )
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
    // console.log('USERS', this.props.users)
    console.log('FILTERS', this.props.filters)
    console.log('ARTIST VALUES', this.state.artistValue)

    return (
      <div className="row">
        <Navbar />

          <div className="col s10 offset-s1 card-1 filterDiv">
            Filter By
            {this.renderArtistFilters()}
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
    users: state.users,
    filters: state.filter
  }
}

export default connect (mapStateToProps, actions)(Dashboard);
