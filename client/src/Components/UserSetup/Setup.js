import React, { Component } from 'react';
import * as actions from '../../actions'
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
    if (artistArray.map(a => { return a.name; }).indexOf(artist.name) === -1) {
      this.setState({ artistArray: [...this.state.artistArray, { name: artist.name, image :artist.images[0].url} ]})
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
          <label className="artistCheckbox"  key={artist.id}>
            <input type="checkbox"/>
            <div key={artist.id} className={`col s3 artistDiv`} onClick={() => this.addArtist(artist)}>
              <img src={artist.images[1].url} style={{ width: '175px', height: '175px' }} className="artistImage" alt={artist.name}/>
              <div className="artistText">{artist.name}</div>
            </div>
          </label>
        )
      })
    }
  }

  render() {
    console.log(this.state.artistArray)
    return (
      <div>
        <div className="row">
          <div className="col s8 offset-s2 artistContainer card-2">
            <div className="artistHeader">
            {"Pick Your Top 10 Artists"}
            </div>
            {this.renderArtists()}
            <button className="artistNext card-2" onClick={() => this.props.submitArtists(this.state.artistArray)}>
              {"Next"}
            </button>
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
