import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../actions';

class Navbar extends Component {
  componentDidMount() {
      this.props.fetchRequests();
  }

  requestCount() {
    if (this.props.requests) {
      return this.props.requests.length
    } else {
      return ''
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">SideBro</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/requests">Friend Requests <span style={{ color: '#ff6090', fontWeight: '500', paddingLeft: '3px' }}>{`( ${this.requestCount()} )`}</span></Link></li>
            <li><Link to="/chats">Chat</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    requests: state.requests
  }
}

export default connect(mapStateToProps, actions)(Navbar);
