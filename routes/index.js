var express = require('express');
var router = express.Router();
var Bluebird = require('bluebird');

var models = require('../models');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;

router.get('/',function(req,res,next){
	Bluebird.all([
		Hotel.find({}),
		Restaurant.find({}),
		Activity.find({})
	])
	.spread(function(hotels,restaurants,activities){
		
		 //res.send(hotels)
	     res.render('index',{hotels: hotels.map(function(h){
			return h.toJSON();
		})});
	     // res.send('hi');
		//render some html that doesn't exist yet
	})
	.then(null,next);
})


module.exports = router;