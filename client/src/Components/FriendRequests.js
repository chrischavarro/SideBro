import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FriendRequests extends Component {
  componentDidMount() {
      this.props.fetchRequests();
  }

  render() {
    console.log(this.props.requests)
    return (
      <div className="row">
        <div className="col s10 offset-s1 card-2">
          <div className="requestContainer">
            Requests
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
