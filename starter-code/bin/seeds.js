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

// CelebModel.create(celebArr)
  // .then((data) => {
  //     console.log(`Data inserted: ${data}`)
  //     mongoose.connection.close()
  //   })
//   .catch(() => console.error());

let MovieModel = require('../models/movie.js');

let movieArr = [{
  name: 'Django Unchained',
  genre: 'drama, western',
  plot: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
}, 
{
  name: "Harry Potter and the Sorcerer's Stone",
  genre: 'adventure, family, fantasy',
  plot: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
}, 
{
  name: 'Little Women',
  genre: 'drama, family, romance',
  plot: "The March sisters live and grow in post-Civil War America."
}];

// MovieModel.create(movieArr)
//   .then((data) => {
//       console.log(`Data inserted: ${data}`)
//       mongoose.connection.close()
//     })
//   .catch(() => console.error());