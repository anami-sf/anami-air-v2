const Flight = require('../models/flight')

const index = (req,res) => {
    Flight.find({}, (err,flightsArr) => {
        res.render('flights/index',{flightsArr:flightsArr}) 
    })
}

const newFlight= (req, res) => {
    //take req.body and send it to show view
    //var flight = new Flight(req.body)
    //console.log(flight)
    res.render( 'flights/new', )
}

function create(req, res) {
    //var flight = new Flight(req.body)
    flight.save(function(err) {
      // one way to handle errors
      if (err) return res.redirect('/flights/new')
      console.log(flight)
      // for now, redirect right back to new.ejs
      res.redirect('/flights')
    })
}

const show = (req, res) => {
    Flight.findById(req.params.id, (err, flight) => {
        res.render('flights/show',{flight:flight}) 
    })
}

module.exports = {
    index,
    new: newFlight,
    create,
    show
}