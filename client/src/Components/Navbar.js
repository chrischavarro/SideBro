import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" className="brand-logo">SideBro</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/requests">Friend Requests</Link></li>
            <li><Link to="/chats">Chat</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
