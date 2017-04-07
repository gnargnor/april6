var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var MovieSchema = mongoose.Schema({
  title : String,
  description : String,
  director : String,
  duration : String,
});

var Movie = mongoose.model('movies', MovieSchema, 'movies');

router.get('/', function(req, res){
  Movie.find({}, function(err, allMovies){
    if (err) {
      console.log('mongo error: ', err);
      res.sendStatus(500);
    }
    res.send(allMovies);
  });
});

router.post('/', function(req, res){
  console.log('post: ', req.body);
  var serverMovie = new Movie({
    title : req.body.title,
    description : req.body.description,
    director : req.body.director,
    duration : req.body.duration
  });
  serverMovie.save(function(err, savedMessage){
    if (err) {
      console.log('post error: ', err);
    }
    console.log('saved: ', savedMessage);
    res.sendStatus(200);
  });
});

module.exports = router;
