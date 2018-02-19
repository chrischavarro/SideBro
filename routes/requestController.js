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

requestController.post('/api/profile/requests/approve', (req, res) => {
  const requestId = Object.keys(req.body).toString();
  const userId = req.user._id;
  console.log('REQUEST ID', requestId)
  Request.findById(requestId)
    .exec((err, request) => {
      User.findById(userId)
        .exec((err, user) => {
          user.friends.push(request.sender)
          user.save()
        })
    })
    Request.remove({ _id: requestId })
  res.send('deleted')
})

requestController.post('/api/profile/requests/deny', (req, res) => {
  const requestId = Object.keys(req.body).toString();
  Request.remove({ _id: requestId })
  res.send('Deleted request')
})

module.exports = requestController;
