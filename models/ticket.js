const mongoose = require('mongoose')

var ticketSchema = new mongoose.Schema({
    seat: String,
    price: Number,
    //Brackets would indicate that the ticket is associated with multiple flights
    flight: {type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}
})

module.exports = mongoose.model('Ticket', ticketSchema)


