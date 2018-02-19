const express = require('express');
const requestController = express.Router();
const User = require('../models/User');
const Request = require('../models/Request');

requestController.get('/api/profile/requests', (req, res) => {
  const userId = req.user._id;
  Request.find({ recipient: userId })
    .populate('sender')
    .populate({
      path: 'sender',
      populate: { path: 'artists '}
    })
    .exec((err, requests) => {
      res.send(requests)
    })
})

module.exports = requestController;
