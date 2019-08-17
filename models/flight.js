const mongoose = require('mongoose')

//TODO add data validations
var flightSchema = new mongoose.Schema({
    airline: String, //enum to include 'American', 'Southwest' & 'United'
    flightNo: Number, //Required - Between 10 and 9999
    departs: Date // Default value: One year from date created
});

module.exports = mongoose.model('Flight', flightSchema);
