const express = require('express');
const friendController = express.Router();
const User = require('../models/User');
const Request = require('../models/Request');

friendController.post('/api/friend_request', (req, res) => {
  let requestId = Object.keys(req.body).toString();
  let userId = req.user._id;

  // if (requestId = '5a6c138722dcc97e0b1171f7') {
  //   User.findById(userId)
  //     .exec((err, user) => {
  //       user.friends.push(requestId);
  //       user.save();
  //     })
  // }
  // else {
    let newRequest = new Request({
      sender: userId,
      recipient: requestId,
      status: 'Pending'
    })
    User.findById(userId)
      .exec((err, requestedUser) => {
        if (err) { console.log('ERROR', err) }
        requestedUser.requests.push(newRequest._id)
        console.log('Request saved!')
        requestedUser.save()
      })
    newRequest.save()
  // }
  res.send('Request sent')
})

module.exports = friendController;
