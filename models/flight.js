const mongoose = require('mongoose')

var destinationSchema = new mongoose.Schema({
    airport: {type: String, min: 3, max: 3, default: 3},
    arrival: Date
});

//TODO add data validations
var flightSchema = new mongoose.Schema({
    airline: String, //enum to include 'American', 'Southwest' & 'United'
    flightNo: Number, //Required - Between 10 and 9999
    departs: Date, // Default value: One year from date created
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', flightSchema);
