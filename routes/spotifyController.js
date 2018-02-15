const express = require('express');
const spotifyController = express.Router();
const randomstring = require('randomstring');
const Spotify = require('spotify-web-api-node');
const keys = require('../config/keys');

const spotifyApi = new Spotify({
  clientId: keys.spotifyClientID,
  clientSecret: keys.spotifyClientSecret,
  redirectUri: keys.spotifyRedirectURI
})

spotifyController.get('/login', (req, res) => {
  const { scopes, spotifyRedirectURI } = keys;
  res.redirect(`https://accounts.spotify.com/authorize?response_type=code&client_id=${keys.spotifyClientID}&scope=`+ encodeURIComponent(scopes) + `&redirect_uri=` + spotifyRedirectURI)

  // const state = randomstring.generate(16);
  // res.cookie(STATE_KEY, state);
  // res.redirect(spotifyApi.createAuthorizeURL(scopes, state));
});

module.exports = spotifyController;
