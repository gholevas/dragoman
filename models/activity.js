var mongoose = require('mongoose');
var placeSchema = require('./place.js').schema;


var activitySchema = new mongoose.Schema({
	name: String,
	place: [placeSchema],
	age_range: String
})

module.exports = mongoose.model('Activity', activitySchema);