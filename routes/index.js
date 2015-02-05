var express = require('express');
var router = express.Router();
var models = require('../models/');
var env = require('../.env.js');

/* GET home page. */
router.get('/', function(req, res) {
  models.Hotel.find({}, function(err, hotels) {
    models.ThingToDo.find({}, function(err, thingToDos) {
      models.Restaurant.find({}, function(err, restaurants) {
        res.render('index', { title: "Everything",
                              hotels: hotels, 
                              thingToDos: thingToDos, 
                              restaurants: restaurants,
                              google_api_key: env.google_api_key });
      });
    });
  });
});


module.exports = router;
