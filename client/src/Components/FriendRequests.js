import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import UserCard from './UserCard';

class FriendRequests extends Component {
  componentDidMount() {
      this.props.fetchRequests();
  }

  renderRequests() {
    const { requests } = this.props
    if (requests) {
      return requests.map(request => {
        const { name, bio, summary, artists } = request.sender
        return (
          <li key={request._id} className="friendRequest">
            <a className="btn-floating btn-large waves-effect waves-light red denyRequestButton">
              <i className="material-icons denyRequestIcon">close</i>
            </a>
            <a className="btn-floating btn-large waves-effect waves-light approveRequestButton">
              <i className="material-icons approveRequestIcon">check</i>
            </a>
            <UserCard
            name={name}
            bio={bio}
            summary={summary}
            artists={artists}
            />
          </li>
        )
      })
    }
  }

  render() {
    console.log(this.props.requests)
    return (
      <div className="row">
        <div className="col s10 offset-s1 card-2">
          <div className="requestContainer col s10 offset-s1 card-3">
            Requests
            <ul>
              {this.renderRequests()}
            </ul>
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
