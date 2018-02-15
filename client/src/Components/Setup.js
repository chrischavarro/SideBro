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
  render() {
    return (
      <div>
        Setup Wizard
      </div>
    )
  }
}

export default connect(null, actions)(Setup);
