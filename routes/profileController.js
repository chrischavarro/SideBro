const express = require('express');
const profileController = express.Router();
const Artist = require('../models/Artist');
const User = require('../models/User');

profileController.post('/api/profile/artists', (req, res) => {
  req.body.map(artist => {
    const newArtist = new Artist({
      name: artist.name,
      image: artist.image
    })
    User.findById(req.user._id)
      .exec((err, user) => {
        user.artists.push(newArtist._id)
        user.save();
      })
    newArtist.save()
  })
  res.send('Done')
})

module.exports = profileController;
