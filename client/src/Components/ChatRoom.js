import React, { Component } from 'react'
import io from 'socket.io-client';
import * as actions from '../actions'
import { connect } from 'react-redux';

class ChatRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.user,
      message: '',
      messages: []
    };

    this.socket = io('localhost:8001')

    this.sendMessage = e => {
      this.setState({ username: this.props.user })
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

  // componentDidMount() {
  //   this.setState({ username: this.props.user })
  //   console.log('USERNAME SET', this.state.username)
  // }

  render() {
    console.log(this.props.user, this.state.username)
    return (
      <div className="row">
        <div className="col s8 chatContainer">
          <div className="card chatContent">
            <div className="card-body">
              <div className="card-title chatTitle">Chatting with {this.props.user}</div>
              <hr/>
              <div className="messages">
                {this.state.messages.map(message => {
                  return (
                    <div key={message.message}>{message.author}: {message.message}</div>
                  )
                })}
              </div>
            </div>
            <div className="card-footer">
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
