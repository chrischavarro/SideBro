const express = require('express');
const chatController = express.Router();
const User = require('../models/User');
const Chat = require('../models/Chat');

chatController.get('/profile/friends', (req, res) => {
  const { _id } = req.user;
  User.findById(_id)
    .populate('friends')
    .exec((err, user) => {
      // console.log(user)
      res.send(user.friends)
    })
})

chatController.get('/chat/:friendId', (req, res) => {
  const { friendId } = req.params,
  userId = req.user._id;
  Chat.find({ members: { $in: [ friendId, userId ] } })
    .exec((err, chat) => {
      if (err) {
        console.log('ERR', err)
        return res.status(200).send([])
      }
      if (!chat) {
        let newChat = new Chat({
          members: [ userId, friendId ],
          history: []
        });
        newChat.save();
        console.log('NEW CHAT', newChat)
        return res.status(200).send(newChat);
      }
      return res.status(200).send(chat);
    })
})

chatController.post('/chat/:friendId', (req, res) => {
  const { friendId } = req.params,
  { author, message } = req.body,
  userId = req.user._id;

  Chat.update(
    { members: { $in: [ friendId, userId ] }},
    { $push: { history: { author: author, message: message } }},
    function (err, chat) {
      if (err) {
        console.log('ERR', err)
      }
      res.status(200)
    }
  );
})

module.exports = chatController;
