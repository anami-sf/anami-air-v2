const Flight = require('../models/flight')

const index = (req,res) => {
    res.render('flights/index')
}

module.exports = {
    index
}