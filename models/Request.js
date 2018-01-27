const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: 'User' },
  recipient: { type: Schema.Types.ObjectId, ref: 'User' },
  status: String
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request
