import React, { Component } from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';
import update from 'immutability-helper'

class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistArray: [],
      active: false
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
      let currentState = this.state.active;
      this.setState({ active: !currentState })
    } else {
      let index = artistArray.indexOf(artist.name)
      this.setState((prevState) => ({
        artistArray: update(artistArray, {$splice: [[index, 1]]})
      }))
      let currentState = this.state.active;
      this.setState({ active: !currentState })
    }
  }

  renderArtists() {
    const { artists } = this.props;
    if (artists) {
      return artists.map(artist => {
        return (
          <div key={artist.id} className={`col s3 artistDiv ${this.state.active}`} onClick={() => this.addArtist(artist)}>
            <img src={artist.images[1].url} style={{ width: '175px', height: '175px' }} className="artistImage" alt={artist.name}/>
            <input type="checkbox" name={artist.id} id={artist.id} key={artist.id} defaultChecked={false} onChange={() => console.log('CHANGE')} />
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
          <div className="col s8 offset-s2 artistContainer card-2">
            <div className="artistHeader">
            {"Pick Your Top 10 Artists"}
            </div>
            {this.renderArtists()}
            <button className="artistNext card-2">
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
