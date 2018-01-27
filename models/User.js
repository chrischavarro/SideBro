const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  bio: String,
  tags: { type: Schema.Types.ObjectId, ref: 'Tag' },
  requests: [{ type: Schema.Types.ObjectId, ref: 'Request' }],
  chats: [{ type: Schema.Types.ObjectId, ref: 'Chat' }],
  strikes: [{ type: Schema.Types.ObjectId, ref: 'Strike' }],
  summary: String,
  artists: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
