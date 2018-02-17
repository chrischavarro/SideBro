import React, { Component } from 'react'

class UserCard extends Component {
  render() {
    return (
      <div className={`col s5 userCard card-2 ${this.props.optional}`}>
        <div className="userName">
          {this.props.name}
        </div>
        <div className="userBio">
          {this.props.bio}
        </div>
      </div>
    )
  }
}

export default UserCard
