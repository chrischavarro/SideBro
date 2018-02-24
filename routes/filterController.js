const express = require('express');
const filterController = express.Router();
const User = require('../models/User');

filterController.post('/filter/artists', (req, res) => {
  const filteredArtists = Array.from(Object.keys(req.body));
  console.log('BODY', filteredArtists);
})

module.exports = filterController;
