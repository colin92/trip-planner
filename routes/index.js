var express = require('express');
var router = express.Router();
var models = require('../models/');
// Hotel, ThingToDo, Restaurant
var env = require('../.env.js');

/* GET home page. */
router.get('/', function(req, res) {
	var rhotels, rthingstodo, rrestaurant;

	models.Hotel.find({}, function(err, rhotels){
		models.Restaurant.find({}, function(err, rrestaurant){
			models.ThingToDo.find({}, function(err, rthingstodo){
  				res.render('index', { title: 'Everything', 
			  						hotels: rhotels,
			  						thingstodo: rthingstodo,
			  						restaurants: rrestaurant,
			  						key: env.google_api_key
  					});
				});
			});
		});
});

module.exports = router;
