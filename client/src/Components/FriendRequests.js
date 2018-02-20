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
        <div>
          {"You don't have any requests. Start sending some of your own!"}
        </div>
      )
    }
  }

  render() {
    console.log(this.props.requests)
    return (
      <div className="row">
        <div className="col s10 offset-s1 card-2">
          <div className="requestContainer">
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
