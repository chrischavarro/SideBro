import React, { Component } from 'react'

class UserArtists extends Component {
  renderArtists() {
    if (this.props.artists) {
      let { artists } = this.props;
      if (artists.length > 5) {
        artists = artists.slice(4)
      }
      return artists.map(artist => {
        return (
          <div key={artist._id} className="col s4" >
            <img src={artist.image} className="cardArtistImage" alt={artist.name} />
            <div className="cardArtistName">{artist.name}</div>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div className="cardArtists col s12">
        <div className="expandedHeader">Favorite Artists</div>
        {this.renderArtists()}
      </div>
    )
  }
}

export default UserArtists
