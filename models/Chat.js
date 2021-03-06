const mongoose = require('mongoose');
const { Schema } = mongoose;

const chatSchema = new Schema({
  members: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  history: [{ author: String, message: String }]
})

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
