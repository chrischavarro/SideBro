const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  user: String,
  message: String
})

const User = mongoose.model('Message', messageSchema);

module.exports = Message;
