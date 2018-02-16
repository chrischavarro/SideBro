import React, { Component } from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';
import update from 'immutability-helper'

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistArray: []
    }
  }
  componentDidMount() {
    const {params} = this.props.match;
    const {accessToken} = params;
    this.props.fetchSpotifyInfo(accessToken);
  }

  addArtist(artist) {
    const { artistArray } = this.state;
    if (artistArray.indexOf(artist.name) == -1) {
      this.setState({ artistArray: [...this.state.artistArray, artist.name]})
    } else {
      let index = artistArray.indexOf(artist.name)
      this.setState((prevState) => ({
        artistArray: update(artistArray, {$splice: [[index, 1]]})
      }))
    }
  }

  renderArtists() {
    const { artists } = this.props;
    if (artists) {
      return artists.map(artist => {
        return (
          <div key={artist.id} className="col s3 artistDiv" onClick={() => this.addArtist(artist)}>
            <img src={artist.images[1].url} style={{ width: '100%', height: '100%' }} className="artistImage" alt={artist.name}/>
            <input type="checkbox" name={artist.id} id={artist.id} key={artist.id} checked={false} onChange={() => console.log('CHANGE')} />
            <div className="artistText">{artist.name}</div>
          </div>
        )
      })
    }
  }

  render() {
    console.log(this.state.artistArray)
    return (
      <div>
        <div className="row">
          <div className="col s10 offset-s1">
            {this.renderArtists()}
            <button type="button">Select</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ artists }) {
  return { artists }
};

export default connect(mapStateToProps, actions)(Setup);
