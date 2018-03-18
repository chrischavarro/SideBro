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
    if (this.props.friends) {
      return this.props.friends.map(friend => {
        return (
          <li key={friend._id} onClick={() => this.props.fetchChat(friend._id)}>
          {friend.name}
          </li>
        )
      })
    }
  }

  render() {
    console.log(this.props.friends)
    console.log(this.props.chatHistory)
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
    friends: state.friends,
    chatHistory: state.chatHistory
  }
}

export default connect(mapStateToProps, actions)(Chat);
