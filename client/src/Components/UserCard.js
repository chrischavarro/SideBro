import React, { Component } from 'react'

class UserCard extends Component {
  renderArtists() {
    if (this.props.artists) {
      console.log(this.props.artists)
      const { artists } = this.props;
      return artists.map(artist => {
        return (
          <div key={artist._id} className="col s3">
            <img src={artist.image} className="cardArtistImage" />
            <div style={{ textAlign: 'center', fontSize: '14px' }}>{artist.name}</div>
          </div>
        )
      })
    }
  }
  render() {
    return (
      <div className={`col s5 userCard card-2 ${this.props.optional} ${this.props.state}`} onClick={this.props.onClick}>
        <div className={`userName ${this.props.state}`}>
          {this.props.name}
        </div>
        <div className={`userBio ${this.props.state}`}>
          {this.props.bio}
        </div>
        <div className={`cardExpandedContent ${this.props.state}`}>
          <div className="cardArtists col s10 offset-s1">
            {this.renderArtists()}
          </div>
        </div>
      </div>
    )
  }
}

export default UserCard
