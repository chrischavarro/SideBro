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
  console.log('IDS', friendId, userId)
  Chat.find({ members: { $in: [ friendId, userId ] } })
    .exec((err, chat) => {
      // console.log('CHAT CHECK', chat)
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
        return res.status(200).send(newChat.history);
      }
      console.log('EXISTING CHAT FOUND', chat)
      return res.status(200).send(chat.history);
    })
})

// chatController.post()

module.exports = chatController;
