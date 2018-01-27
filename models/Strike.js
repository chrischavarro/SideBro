const mongoose = require('mongoose');
const { Schema } = mongoose;

const strikeSchema = new Schema({
  reason: String
})

const Strike = mongoose.model('Strike', strikeSchema);

module.exports = Strike;
