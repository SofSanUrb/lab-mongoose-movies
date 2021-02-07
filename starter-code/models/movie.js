const mongoose = require('mongoose');

let MovieSchema = new mongoose.Schema({
  name: String,
  genre: String,
  plot: String
});

let MovieModel = mongoose.model('movie', MovieSchema);

module.exports = MovieModel;