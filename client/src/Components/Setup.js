import React, { Component } from 'react';
import * as actions from '../actions'
import { connect } from 'react-redux';

class Setup extends Component {
  componentDidMount() {
    const {params} = this.props.match;
    const {accessToken, refreshToken} = params;
    this.props.fetchSpotifyInfo(accessToken);
    // dispatch(setTokens({accessToken, refreshToken}));
  }

  renderArtists() {
    const { artists } = this.props;
    if (artists) {
      return artists.map(artist => {
        return (
          <div key={artist.id} className="col s3 artistDiv">
            <img src={artist.images[0].url} style={{ width: '160px', height: '160px' }} className="artistImage"/>
            <div>{artist.name}</div>
          </div>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s10 offset-s1">
            {this.renderArtists()}
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
