const express = require('express');
const profileController = express.Router();
const Artist = require('../models/Artist');
const User = require('../models/User');

profileController.get('/api/profile/artists/:userId', (req, res) => {
  const { userId } = req.params
  User.findById(userId)
    .populate('artists')
    .exec((err, user) => {
      res.send(user.artists)
    })
})

profileController.post('/api/profile/artists', (req, res) => {
  req.body.map(artist => {
    Artist.find({ name: artist.name})
      .exec((err, existingArtist) => {
        if (existingArtist.length === 0) {
          // console.log('Artist not found')
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
        } else {
          // console.log('Artist exists')
          User.findById(req.user._id)
          .exec((err, user) => {
            user.artists.push(existingArtist._id)
            user.save();
          })
        }
      })
  })
  res.send('Done')
})

module.exports = profileController;
