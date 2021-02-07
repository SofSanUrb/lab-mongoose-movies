const mongoose = require('mongoose');
// require database configuration
require('../app.js');

let CelebModel = require('../models/celebrity.js');

let celebArr = [{
  name: 'Julia Roberts',
  occupation: 'actress',
  catchPhrase: "I'm just an ordinary person who has an extraordinary job."
}, 
{
  name: 'Pedro Pascal',
  occupation: 'actor',
  catchPhrase: "I love mixing horror with comedy."
}, 
{
  name: 'Billie Eilish',
  occupation: 'singer',
  catchPhrase: "You’re italic, I’m in bold."
}];

CelebModel.create(celebArr)
  .then((data) => console.log(`Data inserted: ${data}`))
  .catch(() => console.error());