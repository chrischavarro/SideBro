import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChatWindow extends Component {
  render() {
    return (
        <div className="col s6 card-2 chatWindow">
          <div className="chatUserName">
            {this.props.userName}
          </div>
        </div>
    )
  }
}

export default ChatWindow;
