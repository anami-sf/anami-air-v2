var express = require('express');
var router = express.Router();
var flightsCtl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtl.index);

// router.get('/', function(req, res, next) {
//     res.render('flights/index', { title: 'Anami Air' });
// });

module.exports = router;