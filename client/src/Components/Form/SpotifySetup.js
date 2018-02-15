import React, { Component } from 'react';
import WizardHeader from './WizardHeader'

class SpotifySetup extends Component {
  render() {
    return (
      <div className="row">
        <WizardHeader page={3} />
        <div className="row">
          <div className="wizardDiv card-1 col s10 offset-s1">
              <div className="col s6 offset-s3">
                <a href="/spotify/login"><button className="spotifyButton">Connect to Spotify</button></a>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SpotifySetup;
