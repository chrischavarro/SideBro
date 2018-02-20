const express = require('express');
const requestController = express.Router();
const User = require('../models/User');
const Request = require('../models/Request');

// Get list of all pending friend requests along with their complete profile
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

// Accept a pending friend requests
requestController.post('/api/profile/requests/approve', (req, res) => {
  const requestId = Object.keys(req.body).toString();
  const userId = req.user._id;
  Request.findById(requestId)
    .exec((err, request) => {
      if (err) { console.log('ERROR FETCHING REQUEST', err) }
      console.log('REQUEST', request)
      User.findById(userId)
        .exec((err, user) => {
          if (err) { console.log('ERROR ON USER FRIEND PUSH', err)}
          user.friends.push(request.sender);
          user.requests = user.requests.filter(item => { item._id !== request._id });
          user.save();

          Request.remove({ _id: requestId })
          .exec((err, removed) => {
            if (err) {
              console.log('ERROR', err)
            } else {
              console.log('REMOVED', removed)
            }
          })
        })
    })

  res.send('deleted')
})

// Deny a pending friend request
requestController.post('/api/profile/requests/deny', (req, res) => {
  const requestId = Object.keys(req.body).toString();
  const userId = req.user._id;
  User.findById(userId)
    .exec((err, user) => {
      user.requests = user.requests.filter(item => { item._id !== requestId });
      user.save();
      Request.remove({ _id: requestId })
        .exec((err, removed) => {
          if (err) {
            console.log('ERROR REMOVING REQUEST', err)
          } else {
            console.log('REMOVED DENIED REQUEST', removed)
          }
        })
    })
  res.send('Deleted request')
})

module.exports = requestController;
