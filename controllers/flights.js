const Flight = require('../models/flight')

const index = (req,res) => {
    Flight.find({}, (err,flightsArr) => {
        res.render('flights/index',{flights:flightsArr})   
    })
}

const newFlight= (req, res) => {
    //take req.body and send it to show view
    var flight = new Flight(req.body)
    console.log(flight)
    res.render( 'flights/new')
}


// const newFlight = (res,req) => {
//     //take req.body and send it to show view
//     var flight = new Flight(req.body)
//     flight.save(function(err) {
//         // one way to handle errors
//         if (err) return res.render('flights/new')
//         console.log(flight);
//         // for now, redirect right back to new.ejs
//         res.redirect('flights/index')
//     })    
// }

module.exports = {
    index,
    new: newFlight,
}