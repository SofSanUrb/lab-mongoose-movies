const express = require('express');
const router  = express.Router();

let CelebModel = require('../models/celebrity.js');

router.get('/', (req, res, next) => {
  CelebModel.find()
    .then((data) => res.render('./celebrities/index.hbs', {data}))
    .catch((err) => {
      next(err)
    })
})

router.get('/new', (req, res) => {
  res.render('./celebrities/new.hbs')
})

router.get('/:id', (req, res, next) =>{
  let id = req.params.id;
  CelebModel.findById(id)
    .then((celeb) => {
      res.render("./celebrities/show.hbs", {celeb})
    })
    .catch((err) => {
      next(err)
    })
})

router.get('/:id/edit', (req,res, next) => {
  let id = req.params.id;
  CelebModel.findById(id)
    .then((celeb) => res.render('./celebrities/edit.hbs', {celeb}))
    .catch((err) => next(err))
})

//POST Methods
router.post('/', (req, res) => {
  const {myName, myOcc, myCatchPhrase} = req.body;
  let myNewCeleb = {
    name: myName,
    occupation: myOcc,
    catchPhrase: myCatchPhrase
  } 

  CelebModel.create(myNewCeleb)
    .then(() => {
      res.redirect('./celebrities')
      console.log('Upload new element correct!')
    })
    .catch(() => {
      res.render('./celebrities/new.hbs')
    })
})

router.post('/:id/delete', (req, res, next) => {
  let id = req.params.id;
  CelebModel.findByIdAndRemove(id)
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch((err) => next(err))
})

router.post('/:id/', (req, res, next) => {
  let id = req.params.id;
  const {myName, myOcc, myCatchPhrase} = req.body
  let updatedCeleb = {
    name: myName,
    occupation: myOcc,
    catchPhrase: myCatchPhrase
  }
  CelebModel.findByIdAndUpdate(id, updatedCeleb)
    .then(() => res.redirect('/celebrities'))
    .catch((err) => next(err))
})

module.exports = router;
