const Flight = require('../models/flight')

const index = (req,res) => {
    Flight.find({}, (err,flightsArr) => {
        res.render('flights/index',{flights:flightsArr})   
    })
}

module.exports = {
    index
}