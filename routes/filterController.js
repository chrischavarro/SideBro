const express = require('express');
const filterController = express.Router();
const User = require('../models/User');

filterController.post('/filter/artists', (req, res) => {
  const filteredArtists = Object.keys(req.body).toString().split(","),
  userId = req.user._id
  User.find({
    artists: { $elemMatch: { $in: filteredArtists } },
    _id: { $ne: userId }
  })
    .populate('artists')
    .exec((err, users) => {
      if (err) { console.log('ERROR', err )}
      console.log('USERS', users)
      res.send(users)
    })
  // console.log('BODY', filteredArtists);
})

module.exports = filterController;
