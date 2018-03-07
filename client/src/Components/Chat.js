import React, { Component } from 'react'
import io from 'socket.io-client';
import * as actions from '../actions'
import { connect } from 'react-redux';
import Navbar from './Navbar';
import ChatRoom from './ChatRoom';

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeChat: ''
    };
  }

  componentDidMount() {
    this.props.fetchFriends()
  }

  renderFriends() {
    // const { friends } = this.props
    if (this.props.friends) {
      return this.props.friends.map(friend => {
        return (
          <li>
          {friend.name}
          </li>
        )
      })
    }
  }

  render() {
    console.log(this.props.friends)
    return (
      <div className="row">
        <Navbar/>
        <div className="col s4 card-1">
          Your Bros
          <ul>
            {this.renderFriends()}
          </ul>
        </div>
        <ChatRoom />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, actions)(Chat);
