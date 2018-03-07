import React, { Component } from 'react'
import io from 'socket.io-client';
import * as actions from '../actions'
import { connect } from 'react-redux';
import Navbar from './Navbar';

class ChatRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      message: '',
      messages: []
    };

    this.socket = io('localhost:8001')

    this.sendMessage = e => {
      e.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        author: this.state.username,
        message: this.state.message
      });
      this.setState({ message: '' })
    };

    this.socket.on('RECEIVE_MESSAGE', function(data){
      addMessage(data);
    });

    const addMessage = data => {
      console.log(data);
      this.setState({ messages: [...this.state.messages, data] });
      console.log(this.state.messages)
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
    return (
      <div className="row">
        <div className="col s8">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Global Chat</div>
              <hr/>
              <div className="messages">
                {this.state.messages.map(message => {
                  return (
                    <div>{message.author}: {message.message}</div>
                  )
                })}
              </div>
            </div>
            <div className="card-footer">
              <input type="text" placeholder="Username" className="form-control" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
              <br/>
              <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={e => this.setState({message: e.target.value})}/>
              <br/>
              <button className="btn btn-primary form-control" onClick={this.sendMessage}>Send</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    // friends: state.friends
  }
}

export default connect(mapStateToProps, actions)(ChatRoom);
