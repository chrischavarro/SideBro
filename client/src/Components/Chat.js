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
      activeFriendName: '',
      activFriendId: ''
    };
  }

  componentDidMount() {
    this.props.fetchFriends()
  }

  handleChatSelect(friend) {
    this.props.fetchChat(friend._id)
    this.setState({ activeFriendName: friend.name, activeFriendId: friend._id })
  }

  renderFriends() {
    if (this.props.friends) {
      return this.props.friends.map(friend => {
        return (
          <li key={friend._id} onClick={() => this.handleChatSelect(friend)}>
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
      let { history, members } = this.props.chatHistory[0]
      return (
        <ChatRoom history={history} currentUser={username} friendName={this.state.activeFriendName} friendId={this.state.activeFriendId} />
      )
    }
  }

  render() {
    // console.log(this.props.friends)
    console.log('Chat history', this.props.chatHistory, this.state.activeFriend)
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
