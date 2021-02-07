const mongoose = require('mongoose');

let CelebSchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

let CelebModel = mongoose.model('celebrity', CelebSchema);

module.exports = CelebModel;