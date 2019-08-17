var express = require('express');
var router = express.Router();
var flightsCtl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtl.index);

router.get('/new', flightsCtl.new)

router.post('/', flightsCtl.create);


module.exports = router;