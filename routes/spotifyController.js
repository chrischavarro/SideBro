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
});

spotifyController.get('/callback', (req, res) => {
  const { code } = req.query;
  spotifyApi.authorizationCodeGrant(code).then(data => {
    const { expires_in, access_token, refresh_token } = data.body;
    spotifyApi.setAccessToken(access_token);
    spotifyApi.setRefreshToken(refresh_token);
    res.redirect(`/setup/${access_token}/${refresh_token}`);
  }).catch(err => {
    res.redirect('/#/error?insvalid_token');
  });
});

module.exports = spotifyController;
