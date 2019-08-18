var express = require('express');
var router = express.Router();
var flightsCtl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtl.index);

router.get('/new', flightsCtl.new)

router.post('/', flightsCtl.create);

router.get('/:id', flightsCtl.show)

module.exports = router;