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
  // TO DO: Remove requests for user as well?
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

requestController.post('/api/profile/requests/deny', (req, res) => {
  // TO DO: Remove requests for user as well?
  const requestId = Object.keys(req.body).toString();
  Request.remove({ _id: requestId })
  res.send('Deleted request')
})

module.exports = requestController;
