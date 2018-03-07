const express = require('express');
const chatController = express.Router();
const User = require('../models/User');

chatController.get('/profile/friends', (req, res) => {
  const { _id } = req.user;
  User.findById(_id)
    .populate('friends')
    .exec((err, user) => {
      console.log(user)
      res.send(user.friends)
    })
})

module.exports = chatController;
