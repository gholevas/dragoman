var mongoose = require('mongoose');
var placeSchema = require('./place.js').schema;

var hotelSchema = new mongoose.Schema({
	name: String,
	place: [placeSchema],
	num_stars: {type: Number, enum:[1,2,3,4,5]},
	amenities: [String]
})

module.exports = mongoose.model('Hotel', hotelSchema);