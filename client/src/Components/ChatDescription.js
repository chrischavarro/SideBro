import React, { Component } from 'react';
import ChatWindow from './ChatWindow';

class ChatDescription extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s10 offset-s1 card-2 ChatDescriptionDiv">
          <ChatWindow
            userName="Christian" />
          <div className="col s5 offset-s1 chatDescriptionText">
            <ul>
              <li>{"Once your request is accepted, you'll be able to chat with your new bro"}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatDescription;
// TO DO:
// Figure out accepting/rejecting request
// Be able to see the requester's profile

// Create actual chat system

// DONE
// Automatically accept requests for setup
// Make a page to manage requests
