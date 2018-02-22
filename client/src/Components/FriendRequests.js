import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UserCard from './UserCard';
import Navbar from './Navbar';

import MultiSelectField from './TestInput'

class FriendRequests extends Component {
  componentDidMount() {
      this.props.fetchRequests();
  }

  renderRequests() {
    const { requests } = this.props
    if (requests && requests.length !== 0) {
      return requests.map(request => {
        const { name, bio, summary, artists } = request.sender
        return (
          <li key={request._id} className="friendRequest card-3">
            <UserCard
              name={name}
              bio={bio}
              summary={summary}
              artists={artists}
            />
            <div className="col s5">
              <div

                className="btn-floating btn-large waves-effect waves-light red denyRequestButton"
                onClick={() => this.props.denyRequest(request._id)}
              >
                <i className="material-icons denyRequestIcon">close</i>
              </div>
              <button
                type="button"
                className="btn-floating btn-large waves-effect waves-light approveRequestButton"
                onClick={() => this.props.approveRequest(request._id)}
              >
                <i className="material-icons approveRequestIcon">check</i>
              </button>
            </div>
          </li>
        )
      })
    } else if (requests && requests.length === 0) {
      return (
        <div className="noRequestMessage">
          {"You don't have any requests. Start sending some of your own!"}
        </div>
      )
    }
  }

  render() {
    console.log(this.props.requests)
    return (
      <div className="row">
      <Navbar />
        <div className="col s10 offset-s1 card-1 requestDiv">
          <div className="requestContainer">
            <ul>
              {this.renderRequests()}
            </ul>
            <MultiSelectField />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    requests: state.requests
  }
}

export default connect(mapStateToProps, actions)(FriendRequests);
