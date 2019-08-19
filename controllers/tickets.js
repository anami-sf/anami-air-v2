var Ticket = require('../models/ticket')
var Flight = require('../models/flight')

const newTicket = (req, res) => {
    console.log('req.params', req.params.id)
    Flight.findById(req.params.id, (err, flight ) => {
        console.log('flight', flight)
        Ticket.find({}, (err, tickets) => {
            res.render('tickets/new', {
                flight, 
                tickets
            })
        })
    })
}

// const create = (req, res) => {
//     Flight.findById(req.params.id, (err, flight) => {
//         //Explain this line, what is 'req.body'? where does it come from?
//         flight.destinations.push(req.body)
//         flight.save((err) => {
//             res.redirect(`/flights/${flight._id}`)
//         })
//     })
// }


const create = (req, res) => {
    console.log('at create => req.params.id: ', req.params.id)
    Flight.findById(req.params.id, (err, flight) => {
        console.log('at create => flight:', flight)
        var ticket = new Ticket(req.body)
        console.log('at careate => ticket: ', ticket)
        ticket.save((err) => {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

module.exports = {
    new: newTicket,
    create
}