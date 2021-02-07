const express = require('express');
const router  = express.Router()

let MovieModel = require('../models/movie.js');

router.get('/', (req, res, next) => {
  MovieModel.find()
    .then((data) => res.render('./movies/index.hbs', {data}))
    .catch((err) => {
      next(err)
    })
})

module.exports = router