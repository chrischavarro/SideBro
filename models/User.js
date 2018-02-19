const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  bio: String,
  summary: String,
  artists: [{ type: Schema.Types.ObjectId, ref: 'Artist' }],
  location: String,
  tags: { type: Schema.Types.ObjectId, ref: 'Tag' },
  requests: [{ type: Schema.Types.ObjectId, ref: 'Request' }],
  friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  chats: [{ type: Schema.Types.ObjectId, ref: 'Chat' }],
  strikes: [{ type: Schema.Types.ObjectId, ref: 'Strike' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
