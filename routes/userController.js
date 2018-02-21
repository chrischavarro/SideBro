const express = require('express');
const userController = express.Router();
const User = require('../models/User');

userController.get('/api/users', (req, res) => {
  const userId = req.user._id
  User.find({ _id: { $ne: userId }})
    .populate('artists')
    .exec((err, users) => {
      res.send(users)
    })
})

module.exports = userController;
