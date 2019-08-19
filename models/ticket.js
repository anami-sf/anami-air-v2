const mongoose = require('mongoose')

var ticketSchema = new mongoose.Schema({
    seat: String,
    flight: [{type: mongoose.Schema.Types.ObjectId, ref: 'Flight'}]
})

module.exports = mongoose.model('Ticket', ticketSchema)


