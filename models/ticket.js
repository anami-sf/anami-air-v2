const mongoose = require('mongoose')

var ticketSchema = new mongoose.Schema({
    seat: String,
    price: Number,
    flight: {type: ObjectId, required: true, unique: false}
}, {
    timestamps: true
    }
)

module.exports = mongoose.model(Ticket, ticketSchema)

