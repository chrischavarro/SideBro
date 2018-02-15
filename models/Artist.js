const mongoose = require('mongoose');
const { Schema } = mongoose;

const artistSchema = new Schema({
  name: String,
  image: String
})

const Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;
