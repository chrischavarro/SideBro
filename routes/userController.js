const express = require('express');
const userController = express.Router();
const User = require('../models/User');

userController.get('/api/users', (req, res) => {
  User.find()
    .populate('artists')
    .exec((err, users) => {
      res.send(users)
    })
})

module.exports = userController;
