import React, { Component } from 'react'

class UserCard extends Component {
  renderArtists() {
    if (this.props.artists) {
      const { artists } = this.props;
      return artists.map(artist => {
        return (
          <div key={artist._id} className="col s3" style={{ width: '20%' }}>
            <img src={artist.image} className="cardArtistImage" alt={artist.name} />
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
          {this.props.name} <i className={`material-icons addButton ${this.props.state}`}>person_add</i>
        </div>
        <div className={`userBio ${this.props.state}`}>
          {this.props.summary}
        </div>
        <div className={`cardExpandedContent ${this.props.state}`}>
          <div className="cardExpandedBio">
            {this.props.bio}
          </div>
          <div style={{ textAlign: 'center', marginBottom: '5px' }}>{`Favorite Artists`}</div>
          <div className="cardArtists col s12">
            {this.renderArtists()}
          </div>
        </div>
      </div>
    )
  }
}
// <button className="addBroButton">
// {"Add Bro"}
// </button>

export default UserCard
