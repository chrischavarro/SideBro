import React, { Component } from 'react'
import io from 'socket.io-client';
import * as actions from '../actions'
import { connect } from 'react-redux';
import Navbar from './Navbar';
import ChatRoom from './ChatRoom';

class Chat extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     activeChat: ''
  //   };
  // }

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

  renderChat() {
    let username;
    if (this.props.user) {
      username = this.props.user.name
    }
    if (this.props.chatHistory === null) {
      return (
        <div>
          {"Pick one of your new bros to start chatting with!"}
        </div>
      )
    } else {
      return (
        <ChatRoom history={this.props.chatHistory} user={username} />
      )
    }
  }

  render() {
    console.log(this.props.friends)
    console.log('Chat history', this.props.chatHistory)
    return (
      <div className="row">
        <Navbar/>
        <div className="col s3 card-1 chatNameContainer">
          Your Bros
          <ul>
            {this.renderFriends()}
          </ul>
        </div>
        {this.renderChat()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends,
    chatHistory: state.chatHistory,
    user: state.auth
  }
}

export default connect(mapStateToProps, actions)(Chat);
