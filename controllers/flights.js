const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

const index = (req,res) => {
    Flight.find({}, (err,flightsArr) => {
        res.render('flights/index',{flightsArr:flightsArr}) 
    })
}

const newFlight= (req, res) => {
    res.render('flights/new')
}

function create(req, res) {
    console.log(req.params)
    var flight = new Flight(req.body)
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.redirect('/flights/new')
      console.log(flight)
      // for now, redirect right back to new.ejs
      res.redirect(`/flights/${flight._id}`)
    })
}

const show = (req, res) => {
    Flight.findById(req.params.id, (err, flight) => {
        //flight.tickets
        console.log('at flights/show => flight:  ', flight)
        Ticket.find({flight: flight._id}, (err, tickets) => {
            console.log('at flights/show => tickets: ', tickets)
            res.render('flights/show',{flight, tickets})
        })
    })
}

module.exports = {
    index,
    new: newFlight,
    create,
    show
}