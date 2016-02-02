var mongoose = require('mongoose');
var placeSchema = require('./place.js').schema;

var restaurantSchema = new mongoose.Schema({
	name: String,
	place: [placeSchema],
	price: { type: Number, enum: [1,2,3,4,5]},
	cuisine: [String]
	
})

module.exports = mongoose.model('Restaurant', restaurantSchema);