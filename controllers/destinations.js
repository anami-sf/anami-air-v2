const Flight = require('../models/flight')

const create = (req, res) => {
    Flight.findById(req.params.id, (err, flight) => {
        //Explain this line, what is 'req.body'? where does it come from?
        flight.destinations.push(req.body)
        flight.save((err) => {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

module.exports = {
    create
}