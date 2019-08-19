var Ticket = require('../models/ticket')

const newTicket = (req, res) => {
    Ticket.find({}, (err, tickets) => {
        res.render('tickets/new')
    })
}

module.exports = {
    new: newTicket
}