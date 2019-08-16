var express = require('express');
var router = express.Router();
const flightsCtl = require('../controllers/flights')

/* GET users listing. */
router.get('/', moviesCtrl.index);

module.exports = router;
